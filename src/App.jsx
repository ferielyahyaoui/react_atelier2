import { useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer';
import CounterC from './CounterC';
import CounterF from './CounterF';
import Pokemon from './Pokemon';
import ListManager from './ListManager';
import ColorBox from './ColorBox';
import NotesManager from './NotesManager';
import TodoList from './ToDoList';
import Events from './components/Events';
import Home from './components/Home';
import { Navigate, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Login from './Login';
import AjouterEvent from './AjouterEvent';
import EventPrice from './EventPrice';
import ErrorPage from './ErrorPage';

//consr Home=Lazy()=>import ("./header.jsx")

function App() {
  const [count, setCount] = useState(0);
  const [name,setName] = useState('John');
  const [lastName,setLastName] = useState('Doe');
  const handleClick =()=>{setCount(()=>count+1)}
  const handleClickdown =()=>{setCount(()=>count-1)}
   return (
    <>
    {/* <Header name={name} lastName={lastName}/>
    <button onClick={handleClick}>{count}</button>
    <button onClick={handleClickdown}>{count}</button>
    <CounterC counter={10}/>
    <CounterF/>
    <Pokemon/>
    <ListManager initialItems={['React', 'Angular' ,'VueJs']}/>
    <ColorBox initialColor="orange"/>
    <NotesManager initialNotes={[12, 15, 17]} />
    <TodoList/>
    <Events></Events> */}
    
    <Routes>
    <Route path="/events" element={<Events/>}/>
    <Route path="/signin" element={<Login/>}/>
    <Route path="/login" element={<Navigate to="/signin" replace/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/addevent" element={<AjouterEvent/>}/>
    <Route path="/by/price/:price" element={<EventPrice/>}/>


    <Route path="*" element={<ErrorPage/>}/>
    </Routes>
     {/* <Footer></Footer> */}
    </>
  )
}

export default App
