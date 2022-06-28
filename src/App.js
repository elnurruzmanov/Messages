import React, {useState} from "react"
import './App.css';

function App() {

  const [messages, setMessages]= useState(0);

  const [state, setState] = useState({
    userName: "Rustam",
    gender: "💻  Frontend Developer",
  });

  function addMessage(){
    setMessages((next)=>next+1);
  }
  function deleteMessage(){
    setMessages((next)=>next-1);
  }

  function changeContact(){
    setState((next)=>{
      return{
        ...next,
        userName:"Sarvar",
        gender:"💻 Backend Developer"
      }
    })
  }

  return (
    <div className="container">
      <div className="card">
        <h1>
          <i className="fa-solid fa-message message"></i> Messages:{messages}
          <span className="alert-message">{messages}</span>
        </h1>

        <hr />

        <h3>
          <i className="fa-solid fa-user"></i>
          {state.userName} - {state.gender}
        </h3>
        <div className="edit">
          <i class="fa-solid fa-pen-to-square"></i>
          <span onClick={changeContact}>edit</span>
        </div>

        <hr />

        <button onClick={addMessage} className="btn1">
          Add
        </button>
        <button onClick={deleteMessage} className="btn2">
          Delete
        </button>
      </div>
    </div>
  );
}

export default App;
