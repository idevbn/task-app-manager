import TaskItem from './TaskItem';
import { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const TaskList = () => {

    const { tasks } = useContext(TaskContext);

    return (
        <>
            {tasks.length ? 
                (<ul className='task-list'>
                    {tasks.map((task) => {
                    //    Passando cada tarefa como prop 
                        return (<TaskItem task={task} key={task.id} />)
                    })}
                </ul>
                ) : 
                (
                    <div className='task-message'>Nenhuma tarefa para exibir.</div>
                )
            }
        </>
    );
};

export default TaskList;