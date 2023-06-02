import React from 'react';

const ShowDetailsScreen = ({ show }) => {
  const handleBookTicket = () => {
    // Implement logic for booking a movie ticket
    // You can open a modal or navigate to a separate booking form component
    // Pass the show details to the booking form component as props
  };

  return (
    <div>
      <h1>Show Details</h1>
      <h2>{show.name}</h2>
      <p>{show.summary}</p>
      <button onClick={handleBookTicket}>Book Ticket</button>
    </div>
  );
};

export default ShowDetailsScreen;
