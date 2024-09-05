import { useState } from 'react';
import styles from './App.module.css';



function AddToDo({onNewItems}) {


  const [todoName, setTodoName] = useState("");
const [dueDate, setDueDate] = useState("");

const handleNameChage = (event) =>{

 setTodoName(event.target.value);
}

const handleDateChange =(event) =>{

 setDueDate(event.target.value);
  
}

const handleAddButtonClick = () =>{

 onNewItems(todoName, dueDate);
 setDueDate("");
 setTodoName("");
}

  return (
    <div className={`container ${styles.itemsContainer}`}>
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo here" value={todoName} onChange={handleNameChage}/>
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange}/>
        </div>
        <div className="col-2 ">
          <button type="button" className={`btn btn-success ${styles.kgButton}`}
        
        onClick={handleAddButtonClick}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
