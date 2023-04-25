import './App.css';
import { Fragment, useState } from 'react';
function App() {
  const [task, setTask] = useState("Iemācīties");
  const [taskList, setTaskList] = useState([]);
  function addHandler(){
    setTaskList([...taskList, task]);
    setTask("");
  }
  return (
    // <Fragment>
    <>
    <h1>ToDo ar React</h1>
    <input value={task} onChange={e => setTask(e.target.value)}/>
    <button onClick={addHandler}>Pievienot</button>
    <ul>
      {taskList.map(value => 
        <li>{value}</li>
      )}
    </ul>
    </>
    // </Fragment>
  );
}

export default App;
