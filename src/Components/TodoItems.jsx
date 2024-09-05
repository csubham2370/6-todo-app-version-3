import ToDoItem from "./ToDoItem";
import styles from "./TodoItems.module.css"
let TodoItems = ({Items, onDeleteClick}) =>{

  return (<>
  <div className={styles.itemsContainer} >

    {Items.map((item,index) => (<ToDoItem key={index} todoName={item.name} tododate={item.date} onDeleteClick={onDeleteClick}></ToDoItem>))}



        </div>
        </>);
}

export default TodoItems;