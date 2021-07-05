import TaskList from './components/TaskList';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import { TaskContextProvider } from './contexts/TaskContext';
import './App.css';

const App = () => {
  


  return (
    <TaskContextProvider>
      <div className='container'>
        <Header />
        <TaskForm />
        <TaskList />
      </div>
    </TaskContextProvider>
  );
};

export default App;
