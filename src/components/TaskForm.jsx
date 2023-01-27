import { useState, useContext } from "react"
import { TaskContext } from "../context/TaskContext"

export const TaskForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const {createTask} = useContext(TaskContext); // EXTRAIGO LA FUNCION DEL CONTEXT CON USE CONTEXT

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            title,
            description
        });
        setTitle(''); // SE LIMPIA LOS VALORES DEL NUEVO ARREGLO
        setDescription('');
    }

    return (
        <div className="max-w-md mx-auto">
            <form action="" onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
            <h1 className="text-yellow-600 text-4xl text-center mb-4">CREAR TAREA</h1>
            <input className="bg-slate-300 p-3 w-full mb-2" type="text" onChange={(e) => { setTitle(e.target.value) }} value={title} autoFocus/>
            <textarea className="bg-slate-300 p-3 w-full mb-2"  onChange={(e) => {setDescription(e.target.value)}} value={description} rows="10" autoFocus></textarea>
            <button className="bg-indigo-500 p-2 text-yellow-200 rounded-md text-center">Guardar</button>
            </form>
        </div>
    )
}