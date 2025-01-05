import "./App.css";
import { Component, useState } from "react";

class Myform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      compteur: 0,
face : null,
fin:false
    };
  }
  change= ()=>{
   const valeur = Math.floor(Math.random()*6)+1
   console.log(valeur);
   
if(this.props.cache==valeur){
  this.setState({compteur:this.state.compteur+=1,face:valeur,fin:true})
  return(
    <p>vous avez  trouver le face Cach !!!</p>
  )
}else{
  this.setState({compteur:this.state.compteur+=1,face:valeur,fin:false})
}
  }
  initialiser =()=>{
    this.setState({compteur:0 , face:0 , fin : false})
  }
  getImg=()=>{
    return `images/face${this.state.face}.PNG`
  }
  
  render() {
    return (
      <>
      <img src="images/init.PNG" />
    <h1>Jeu d'é :  {this.props.cache}</h1>

        <h1>
         face : {this.state.face}
        </h1>
        {this.state.face &&<img src={this.getImg()}/>}
        <h1>
         nombre d'essai : {this.state.compteur}</h1>

        {this.state.fin?
        <div>
        <p>Bravo vous avez trouvez la face cachée </p>
        <button onClick={this.initialiser}>Initialiser 👾 </button>
        </div>:
        <button onClick={this.change}>Jouer 🤖 </button>
      }
      </>
    );
  }
}
export default function App() {
  return (
    <>
      <Myform cache={2} />
    </>
  );
}
