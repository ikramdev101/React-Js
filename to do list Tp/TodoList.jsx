
import { useState } from 'react';

import './header'
import Task from './task';


function TodoList(props){
    // state declaration : 

    
 
const [tach,setTach]=useState('');
const[description,setDescriptio]=useState('');
const [date,setDate]=useState('');
const [catégoie,setCatégorie]=useState('');
const [task,setTask] = useState([])


//two way binding
const handleTach=(e)=>setTach(e.target.value);
const handledescription=(e)=>setDescriptio(e.target.value)
const handledate=(e)=>setDate(e.target.value)
const handleCatégorie=(e)=>setCatégorie(e.target.value)

//ajouter
const ajouter=()=>{
   
if ( tach =='' && description=="" && date=='' && catégoie =='' )   {
    alert('pleaaseu fill informations !!')
}else{
    setTask([...task,{id: Date.now(),tach,description,date,catégoie}])
    setTach('')
    setCatégorie('')
    setDate('' )
        setDescriptio('')
        console.log(task);
}
}
//handelSubmit
const handelSubmit=(e)=>{
    e.preventDefault();
    ajouter()
    
}
    return(
<div>
<form action="" onSubmit={handelSubmit}>
Tache : <br />
<input type="text" value={tach} onChange={handleTach} />
Description : <br />
<input type="text" value={description} onChange={handledescription} />
Date : <br />
<input type="date"  value={date} onChange={handledate}/>
catégorie: 
<select id="mySelect" value={catégoie} onChange={handleCatégorie}>
  <option value="personal 🐱‍🏍">personal 🐱‍🏍</option>
  <option value=" profesionnel 👨‍🎓">profesionnel👨‍🎓 </option>
  <option value="general ✍">general ✍ 3</option>
</select>
<div className="btns">
    <button onClick={()=>ajouter}>Ajouter </button>
<button onClick={()=>{props.isntShow(false)}}>Annuler</button>
</div>

</form>
<div className="tasks">
    
{task.map((elemet)=>{
        {console.log(elemet)}
        return (
            <Task 
             key={elemet.id}
               tasks={task}
                setTask={setTask}
                 task={elemet} />
            

        )
      })}
</div>
</div>
    )
    
}
export default TodoList;
