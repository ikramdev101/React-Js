import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
    <button> 
         <Link to='/header'>header</Link>
    </button>
     <button> 
         <Link to='/products'>products</Link>
         </button>
     <button>
         <a href="">about</a>
         </button>

    </div>
  )
}
