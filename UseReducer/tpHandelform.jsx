import { useEffect, useReducer, useState } from "react";
import "./App.css";
import axios from "axios";

export default function App() {
  //declare intial state
  const initialState={
    name:'',
    password:'',
    Email:''
  }
  //reducer
 const Reducer=(state,action)=>{
switch(action.type){
  case'change': return{...state , [action.name]:action.payload}
  case'reset': return initialState
 
default: return initialState
}
 }
const [state,dispatch]=useReducer(Reducer,initialState)
//manage inouts changing
const HandInput=(e)=>{
  dispatch({
    type:'change',
    name:e.target.name,
    payload:e.target.value
  })
}


  return (
    <div className="App">
<input type="text"  placeholder="nom" name="name"  value={state.name} onChange={HandInput} /><br />
<input type="text" placeholder="prénom" name="password"   value={state.password} onChange={HandInput} /><br />
<input type="email" placeholder="Email"  name="Email"   value={state.Email}  onChange={HandInput} /><br />
<button  onClick={ ()=>{console.log(state);
}} >Afficher</button>
<button   onClick={()=>{dispatch({type:'reset'})}} >reset</button>

       

     
    </div>
  );
}
