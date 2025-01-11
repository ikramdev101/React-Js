import React from 'react'

function Task(props) {
const supprimer = () => {
   props.setTask(props.tasks.filter((elem)=> elem.id !==props.task.id ))
  
 
      
  }
        return (
          <div className='task'>
              <h2 className='title'>Task : {props.task.tach}</h2>
              <h2 className='title'>Description :{props.task.description} </h2>
              <h2 className='title'>Date {props.task.date} : </h2>     
                 <h2 className='title'>Catégorie :{props.task.catégoie} </h2>
                 <div className="button">
                 <button onClick={()=>alert('hey')}>Modifier ✍</button>
                 <button onClick={()=>supprimer()}>Suppriner 🗑</button>
                 </div>
      
      
      
      
              
          </div>
        )
      }
export default Task;
