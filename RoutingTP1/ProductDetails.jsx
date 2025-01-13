import React from 'react'
import {Link} from 'react-router-dom'

export default function Product() {
  return (
    <div>
       <div className='haha'>
        <h1>Pc portable </h1>
      
     <div className="img">
        <Link to='/product'>
         <img src="" alt="" />
        </Link>
        
     </div>
      <h1>prix : 15000 dh</h1>
      <Link to='/'>revenez à la page d'acculeee</Link>
    </div>
    </div>
  )
}
