import logo from './logo.svg';
import './App.css';

import Navbar from './components/NavBar/Navbar';
import TaskList from './components/TaskList/TaskList';
import { useRef, useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([])

  const idAcc = useRef(0);

  const generateId = () => {
    idAcc.current = idAcc.current + 1;
    return idAcc.current;
  }

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state,
    }
    setTasks((existingTasks) => {
      return [
        ...existingTasks, newTask
      ]
    }) 
  }

  const updateTask = (id, title, state) => {
    setTasks((existingTasks => {
      return existingTasks.map((task) => {
        if(task.id === id) {
          return {...task, title, state}
        } else {
          return task
        }
      })
    }))
  }

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter(t => t.id !== id)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div className='container'>
          <TaskList title="Pendente" taskState="Pendente" onAddTask={addTask} tasks={tasks.filter(t => t.state === "Pendente")} onTaskUpdate={updateTask} onDeleteTask={deleteTask} />
          <TaskList title="Fazendo" taskState="Fazendo" onAddTask={addTask} tasks={tasks.filter(t => t.state === "Fazendo")} onTaskUpdate={updateTask} onDeleteTask={deleteTask} />
          <TaskList title="Completo" taskState="Completo" onAddTask={addTask} tasks={tasks.filter(t => t.state === "Completo")} onTaskUpdate={updateTask} onDeleteTask={deleteTask} />
        </div>
      </header>
    </div>
  );
}

export default App;
