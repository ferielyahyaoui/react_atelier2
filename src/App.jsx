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
function App() {
  const [count, setCount] = useState(0);
  const [name,setName] = useState('John');
  const [lastName,setLastName] = useState('Doe');
  const handleClick =()=>{setCount(()=>count+1)}
  const handleClickdown =()=>{setCount(()=>count-1)}
   return (
    <>
    <Header name={name} lastName={lastName}/>
    <button onClick={handleClick}>{count}</button>
    <button onClick={handleClickdown}>{count}</button>
    <CounterC counter={10}/>
    <CounterF/>
    <Pokemon/>
    <ListManager initialItems={['React', 'Angular' ,'VueJs']}/>
    <ColorBox initialColor="orange"/>
    <NotesManager initialNotes={[12, 15, 17]} />
    <TodoList/>
    <Events></Events>
     <Footer></Footer>
    </>
  )
}

export default App
