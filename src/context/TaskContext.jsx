import { createContext, useState, useEffect } from "react"
import { tasks as data } from "../data/task"

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
    const [tasks, setTasks] = useState([])

    const createTask = (task) => {
        setTasks([...tasks, {
            id: tasks.length, // SUMAR EL NUMERO Y CAMBIANDO
            title: task.title,
            description: task.description
        }]) // COPIA TODAS LA TAREAS Y AÑADE UNA NUEVA ...ARREGLO
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    useEffect(() => {
        setTasks(data)
    }, [])  

    return (
        <>
            <TaskContext.Provider value={{
                tasks,
                createTask,
                deleteTask
            }}>
                {props.children}
            </TaskContext.Provider>
        </>
    )
}