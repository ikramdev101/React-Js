import { useState } from "react";
import "./App.css";
import Myheader from "./header";
import TodoList from "./TodoList";
import Task from "./task";



export default function App() {

  const [isShow, setIsShow] = useState(false);

  return (
   
   
    <div className="app">
 <Myheader isShow={setIsShow} />
    <div className="list">
      {isShow ? <TodoList isntShow={setIsShow} /> : <></>}
    </div>
 
    </div>
  );
}
