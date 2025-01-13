l'objectife de tp howa njibo db b axios o useEffect o ndiro filter l data selon l 
  valeur li aydakhlha l user 
import { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";

export default function App() {
  const [users, setusers] = useState([]);
  const [search, setSearch] = useState('');
  const [filterd,setFilterd]=useState([])
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((resposne) => {
      setusers(resposne.data);
    
    });
  }, []);
  useEffect(()=>{
     setFilterd(users.filter((item)=>{
      return item.name.toLowerCase().includes(search.toLowerCase()
    )
    }))
  },[search])
 
  const handelchange = (e) => {
    setSearch(e.target.value);
   
   
    
    
   
  };


  return (
    <div className="App">
      <input type="search" onChange={handelchange} value={search} />
      {filterd.map((item)=>{
        return <h3 key={item.id}>{item.name}</h3>
      })}
        
     
    </div>
  );
}
