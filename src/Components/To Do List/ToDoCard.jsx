export default function ToDoCard() {
    const [task, setTask] = useState();
    return(
        <div className="bg-white p-5"> 
            <h2 className="text-[2em]">To-Do List</h2>
            <h1>To-Do List</h1>
            <input type = "text" placeholder = "Enter New task" onKeyUp = {(event) => {setTask(event.target.value)}}></input>
            <button>Add</button>
            <div>No Tasks Yet</div>
        </div>
    )
}