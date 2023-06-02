import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';

const HomeScreen = () => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setShows(response.data);
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

    fetchShows();
  }, []);

  const handleShowDetails = (showId) => {
    navigate(`/show/${showId}`);
  };

  return (
    <div>
      <h1>TV Shows</h1>
      {shows.map((show) => (
        <div key={show.show.id}>
          <h2>{show.show.name}</h2>
          <p>{show.show.summary}</p>
          console.log(show.show.name);
          <button onClick={() => handleShowDetails(show.show.id)}>Show Details</button>
        </div>
      ))}
    </div>
  );
};

export default HomeScreen;
