import { use } from 'react';
import { useState ,useEffect} from 'react'

const CounterF=({step=2})=>{
    console.log("CounterF:Render");
    const [count, setCount] = useState(0);
    const [loading,setLoading]=useState(true);
    const handleClick=()=>setCount((prev)=>prev+step)
    const handleClickdown=()=>setCount((prev)=>prev-step)
    const Reset=()=>setCount(0)
    useEffect(()=> {
        const timer=setTimeout(()=>setLoading(false),3000)
    },[])
    useEffect(()=> {
        console.log("Component did update");
    },[])
    return(
        <>
        {loading ? <h1>Loading...</h1> :
        <>
        <p>Count={count}</p>
        <button onClick={handleClickdown}>Decrementer de {step}</button>
        <button onClick={handleClick}>Incrementer de {step} </button>
        <button onClick={Reset}>Reset</button>
        </>}
        </>
    );
};
export default CounterF;