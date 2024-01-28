import { useState } from 'react';

import { useGetThemoviByTimeQuery } from './services/themoviedb';
import './App.css';

function App() {
  const [typeMedia, setTypeMedia] = useState('all');
  const [trendingTime, setTrendingTime] = useState('day');
  const { data, error, isLoading } = useGetThemoviByTimeQuery({
    time: trendingTime,
    type: typeMedia,
  });

  const handleTimeChange = event => {
    setTrendingTime(event.target.value);
  };

  const handleTypeChange = event => {
    setTypeMedia(event.target.value);
  };

  return (
    <div className="App">
      <label className="Label">
        Media type:
        <select name="mediaType" onChange={handleTypeChange} defaultValue="all">
          <option value="all">All</option>
          <option value="movie">Movie</option>
          <option value="person">Person</option>
          <option value="tv">Tv</option>
        </select>
      </label>
      <hr />
      <label className="Label">
        Trending time:
        <select
          name="trendingTime"
          onChange={handleTimeChange}
          defaultValue="day"
        >
          <option value="day">Day</option>
          <option value="week">Week</option>
        </select>
      </label>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <ul>
            {data.results.map(type => (
              <li key={type.id} className="Items">
                <span
                  className="Item"
                  style={{
                    '--poster-path': `url('https://image.tmdb.org/t/p/w500/${
                      type.poster_path || type.profile_path
                    }')`,
                  }}
                >
                  {type.title || type.name}
                </span>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
}

export default App;
