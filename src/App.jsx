import AppName from "./Components/AppName";
import AddToDo from "./Components/AddTodo";
// import ToDoItem from "./Components/ToDoItem";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import styles from "./App.module.css"
import { useState } from "react";

function App() {
  // const todoItems = [
  //   { name: "Buy Milk", date: "22/08/2024" },
  //   { name: "Goto College", date: "22/08/2024" },
  //   { name: "Like this video", date: "Right now." },
  //   { name: "Subscribe the channel", date: "Right now." },
  // ];

  const [todoItems,setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) =>{
    console.log(`New Item ${itemName} and ${itemDueDate}.`)

    const newTodoItems = [...todoItems,{name: itemName,date: itemDueDate }]

    setTodoItems(newTodoItems);
  }
  
  const handleDeleteItem = (itemName) =>{

    const newTodoItems = todoItems.filter(item => item.name !== itemName);
    setTodoItems(newTodoItems);
  
    console.log(`Item Deleted:${itemName}`);

  }
  return (
    <>
      <center className="todo-container">
        <AppName></AppName>
        <AddToDo onNewItems={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
        <TodoItems  Items={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
      </center>
    </>
  );
}

export default App;
