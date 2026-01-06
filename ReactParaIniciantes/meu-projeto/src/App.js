import logo from './logo.svg';
import './App.css';

import Navbar from './components/NavBar/Navbar';
import TaskList from './components/NavBar/TaskList/TaskList';
import { useState } from 'react';

const task = {
  id: 0,
  title: 'Nova tarefa',
  state: 'pendente'
}

function App() {

  const [tasks, setTasks] = useState([])

  let idAcc = 0;

  const generateId = () => {
    idAcc = idAcc + 1;
    return idAcc;
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
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div className='container'>
          <TaskList title="Pendente" onAddTask={addTask} tasks={tasks} />
        </div>
      </header>
    </div>
  );
}

export default App;
