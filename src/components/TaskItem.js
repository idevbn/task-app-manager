import { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const TaskItem = ({ task }) => {

    const { deleteTask, findTask, toggleTaskCompleted } = useContext(TaskContext);


    return (
        <li className='task-item' style={{listStyleType:'none'}} >
            <div className='task-wrapper'>
                <span className='task-check'>
                    <input 
                        type={'checkbox'} 
                        checked={task.completed}
                        onChange={() => toggleTaskCompleted(task.id)}
                    />
                </span>
                
                <span 
                    className={task.completed ? 'task-done': 'task-text'}
                >
                    {task.text}
                </span>
              

                <div className='buttons-container'>
                    <button className='edit-task' onClick={() => findTask(task.id)}>
                        <i className='fas fa-pen'></i>
                    </button>
                    <button className='delete-task' onClick={() => deleteTask(task.id)}>
                        <i className='fas fa-trash-alt'></i>
                    </button>
                </div>
            </div>
        </li>
    );
};

export default TaskItem;