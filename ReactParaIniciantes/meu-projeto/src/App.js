import logo from './logo.svg';
import './App.css';

import Navbar from './components/NavBar/Navbar';
import TaskList from './components/NavBar/TaskList/TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div>
          <TaskList title="Pendente" />
          <TaskList title="Fazendo" />
          <TaskList title="Completo" />
        </div>
      </header>
    </div>
  );
}

export default App;
