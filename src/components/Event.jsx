import React, { useEffect, useState } from "react";
import { Card,Button,Alert } from 'react-bootstrap';
import Placeholder from '../assets/placeholder.jpg';
import { use } from "react";
import { Link } from "react-router-dom";
function Event({event,handleClick}){
    const images= import.meta.glob("../assets/*",{eager:true});
    const getImagePath=(img)=>{
        return images[`../assets/${img}`]?.default || Placeholder;
    }
    const [like,setLiked]=useState(false);
    const [showAlert,setshowAlert]=useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setshowAlert(false), 3000);
        return () => clearTimeout(timer);
    }, []);
    
    return (
    <Card>
     {showAlert && <Alert> Welcome to Esprit event </Alert>}

      <Card.Img src={getImagePath(event.img)}/>
      <Card.Body>
        <Card.Title>{event.name}</Card.Title>
        <Card.Text> 
         Price :{event.price} <br />
        nbTickets: {event.nbTickets} <br />
        nbParticipants :{event.nbParticipants}

        </Card.Text>

        <Button className='mb-4' onClick={()=>setLiked(!like)}>{like? "Dislike":"Like"}</Button>
        <Button className='mb-4' onClick={()=>handleClick(event.name)} disabled={event.nbTickets==0}>Book an event</Button>
        <Button className="btn btn-outline-primary" > <Link to={`/by/price/${price}`}></Link>Voir Details</Button>
      </Card.Body>
    </Card>
    )
}
export default Event;