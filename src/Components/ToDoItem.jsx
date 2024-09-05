import styles from './App.module.css'
function ToDoItem({todoName, tododate,onDeleteClick}) {


  return (
    <div className="container">
      <div className={`row ${styles.kgRow}`}>
        <div className="col-6">{todoName}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button type="button" className={`btn btn-danger ${styles.kgButton}`} onClick={() => onDeleteClick(todoName)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;