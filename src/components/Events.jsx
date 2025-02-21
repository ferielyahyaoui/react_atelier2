import React, { useEffect, useState } from "react";
import Event from "./Event";
import data from '../data/events.json'
import Header from "../Header";
function Events(){
    const event1={
    "name": "Festival international de Carthage",
    "description": "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
    "img": "event1.jpg",
    "price": 30,
    "nbTickets": 10,
    "nbParticipants": 10,
    "like": false
    }
    const [events,setEvents]=useState([]);
    useEffect(()=>{setEvents(data)},[]);
    const handleClick=(name)=>{
        setEvents(events.map((event)=>event.name==name?
        {...event,nbTickets:event.nbTickets-1,nbParticipants:event.nbParticipants+1}
        :event))
    }
    return (
        <>
        <Header></Header>
        <h1>Events components</h1>
        <div className="d-flex flex-wrap">
        {events.map((event,index)=>
        <Event key={index} event={event} handleClick={handleClick}/>
        )}
        
        </div>
        </>
    )
}
export default Events;