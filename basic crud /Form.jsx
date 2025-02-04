import React from "react";
import { useState } from "react";

export default function Form() {
  const [postName, setPostName] = useState("");
  const [postBody,setBostBody]=useState('');
  const [posts,setPosts]=useState([]);
  const [smodif,setModif]=useState(false)
  const [Edited,setEditedId]=useState(null)
  const handelPostName=(e)=>{
setPostName(e.target.value)
  }
  const handelBodyPost = (e) =>{
setBostBody(e.target.value)
  }
  const ajouter =()=>{
   if (postName!=='' && postBody !==''){
    setPosts([...posts,{ id: Date.now(), postName,postBody}])
    setPostName('')
    setBostBody('')

   }else{
    alert('please fill the form')

   }
    console.log(posts);
    
    
  }
  const handelSubmit=(e)=>{
    e.preventDefault ();
 
  }
  const supprimer=(id)=>{
    setPosts(posts.filter((post2)=>post2.id !== id ))
  }
const modifier=(post)=>{
    setPostName(post.postName)
    setBostBody(post.postBody)
    setModif(true)
    setEditedId(post.id)
}
const Annuler=()=>{
    setPostName('')
    setBostBody('')
    setModif(false)
}
const Submit=()=>{
   setPosts(posts.map((post)=>
    post.id === Edited ? {...post,postName,postBody} : post
   ))
   setModif(false);
   setEditedId(null);
   setPostName("");
   setBostBody("");  
}
  return (
    <div>
      <form action="" onSubmit={handelSubmit}>
        post name :
        <input type="text" value={postName} onChange={handelPostName} />
        <br />
        post pody :<textarea name="" id="" value={postBody} onChange={handelBodyPost}></textarea>
       {smodif ? <button onClick={Submit}>Submit</button> : <button onClick={ajouter}>Ajouter</button>}
        {smodif ? <button  onClick={()=>Annuler()}> Annuler</button> : <></>}
      </form>
    
        {posts.map((post,index)=>{
            return(
    <div key={index}>
 <h2>id :{post.id}</h2><br />
<h3>post :{post.postName}</h3><br />
<h3>Body :{post.postBody}</h3><br />
<button onClick={ ()=>modifier(post)}>Modifier</button>
<button onClick={()=>supprimer(post.id)}>Supprimer</button>

                </div>
            )
        })}
       


    </div>
  );
}
