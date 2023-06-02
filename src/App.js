import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
<div className="container">
 <h1>QuadB</h1>



  <div className="d-flex align-content-stretch flex-wrap">
 {data.map((item) => (
  <div>
  <div className="card mx-2 my-2 zoom" style={{width: '18rem'}}>
  <img src={item.show.image.medium} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.source}</h5>
    <p className="card-text">Status: {item.show.status}</p>
    <p className="card-text">Site: {item.show.name}</p>
    <p className="card-text">In 24 Hours?: {item.show.name}</p>
    <p>Start at: {item.show.name}</p>
    <p>end at: {item.show.name}</p>
    <a href={item.show.url} className="btn btn-primary">Visit Contest</a>
  </div>
</div>
</div>
 ))}
</div>
</div>
</>

  );
}

export default App;
