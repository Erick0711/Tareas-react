import React from 'react'
import ReactDOM from 'react-dom/client'
import { TaskContextProvider } from './context/TaskContext'
import './assets/css/tailwind.css'
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>,
)
