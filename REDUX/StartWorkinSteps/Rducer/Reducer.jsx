  const Myreducer =(state={count:0},action)=>{
    switch(action.type){
        case 'increement': return {count : state.count +1}
        case 'decrement': return {count : state.count +1}
        case 'reset': return {count : 0}


    }

}
export default Myreducer;
