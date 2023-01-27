import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

export const TaskCard = ({ task }) => {
    // const alertDelete = () => {
    //     alert(task.id);
    // }
    const {deleteTask} = useContext(TaskContext);

    return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
        <h1 className="text-xl font-bold capitalize text-center">{task.title}</h1>
        <p className="text-gray-500 text-sm">{task.description}</p>
        <button className="bg-red-500 p-1 rounded-md mt-4 hover:bg-red-600" onClick={() => deleteTask(task.id)}>Eliminar</button>
    </div>
    )
}