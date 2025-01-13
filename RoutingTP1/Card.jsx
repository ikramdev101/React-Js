import React from 'react'
import{Link} from 'react-router-dom'

export default function Card() {
  return (
    <div className='haha'>
        <h1>Pc portable </h1>
      
     <div className="img">
        <Link to='/product'>
         <img src="" alt="" />
        </Link>
        
     </div>
      <h1>prix : 15000 dh</h1>
    </div>

   
  )
}
