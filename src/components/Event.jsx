import React, { useEffect, useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import Placeholder from "../assets/placeholder.jpg";
import { Link } from "react-router-dom";
import "../components/Event.css"; 

function Event({ event, handleClick }) {
  const images = import.meta.glob("../assets/*", { eager: true });

  const getImagePath = (img) => {
    return images[`../assets/${img}`]?.default || Placeholder;
  };

  const [like, setLiked] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowAlert(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="event-card">
      {showAlert && <Alert variant="info">Welcome to Esprit event</Alert>}

      <Card.Img variant="top" src={getImagePath(event.img)} />

      <Card.Body>
        <Card.Title>
          <Link to={`/by/price/${event.price}`} className="event-link">
            {event.name}
          </Link>
        </Card.Title>

        <Card.Text>
          <strong>Price:</strong> {event.price} DT <br />
          <strong>Number of tickets:</strong> {event.nbTickets} <br />
          <strong>Number of participants:</strong> {event.nbParticipants}

        </Card.Text>

        <div className="event-buttons">
          <Button className="like-btn" onClick={() => setLiked(!like)}>
            {like ? "Dislike" : "Like"}
          </Button>

          <Button
            className="book-btn"
            onClick={() => handleClick(event.name)}
            disabled={event.nbTickets === 0}
          >
            Book an event
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Event;
