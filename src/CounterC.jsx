import { Component } from "react";

export default class CounterC extends 
    Component{
      
    constructor(props){
       super(props);
       this.state = {
        count: 0,
        counter :0,
        loading:true
       };
    }
    static getDerivedStateFromProps(props, state){
        console.log("CounterC:getDerivedStateFromProps");
        if (props.counter !== state.counter){
            return {count: props.counter};
            
        }
        return null;
    }
    componentDidMount(){
        console.log("CounterC:componentDidMount");
        setTimeout(()=>{
            this.setState({loading:false});
        },3000);
        }
  
    render(){
        console.log("Counter C : render");
        return (
            <>
           {this.state.loading ? (
            <div>Loading...</div>
            ): (
            <div>
                <p>Count: {this.state.count}</p>
                <p>Counter: {this.state.counter}</p>
            </div>
            )}
            </>
        );
    }

    }