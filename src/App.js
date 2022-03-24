import React,{useState} from "react";
import "./style.css";
function Hooks(){
  //Setting state to the component By using "UseStste" Hook.
  const [mail,setMail] = useState([]);
  const [input,setInput] = useState(""); 
  console.log(input);
  let handliClick = ()=>{
    setMail([...mail,input]);
    setInput(' ');
  }
  return (
    <>
    <h3 style={{color:'purple'}}>Simple Todo List</h3>
   <input value={input} onChange={e=>setInput(e.target.value)}/>&nbsp;&nbsp;&nbsp;
   <button onClick={(e)=>handliClick()}>Add Todo <b>:-</b></button>
   <ol style={{color:'red'}}>{mail.map((e)=><li>{e}</li>)}</ol>
   <h1>{mail}</h1>
   <h3>{mail}</h3>
    </>
  );
}
export default function App() {
  return (
    <div>
      <Hooks />
      <h1 style={{color:"green"}}>Hooks Practies :)</h1>
      <h3 style={{color:"green"}}>:)</h3>
    </div>
  );
}
