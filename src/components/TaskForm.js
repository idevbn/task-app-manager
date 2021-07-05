import { useContext, useState, useEffect } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const TaskForm = () => {

    const { addTask, editItem, editTask } = useContext(TaskContext);

    const [text, setText] = useState('');

    // Lidando com a submissão do formulário
    const handleSubmit = (event) => {
        event.preventDefault();

        if (editItem === null) {

            addTask(text);

            // Limpando o input após a adição de uma tarefa
            setText('');
            

        } else {

            editTask(text, editItem.id);
            
        }

    };

    useEffect(() => {
        if (editItem) {

            setText(editItem.text);

        } else {

            setText('');

        }
    }, [editItem]);

    return (
        <>
            <form onSubmit={handleSubmit} className='form'>
                <input 
                    onChange={(event) => setText(event.target.value)}
                    type='text' 
                    value={text}
                    className='input'
                    placeholder='Que tarefa você deseja adicionar?'
                    required
                />
                {!editItem ? 
                        (<button type='submit' className='btn-form btn-add-task'>
                            <i className="fas fa-plus"></i>
                        </button>
                        ) : (
                        <button type='submit' className='btn-form btn-save-task'>
                            <i className="fas fa-save"></i>
                        </button>
                        )
                        
                }
            </form>
            <hr className='horizontal-line' />
        </>
    );
};

export default TaskForm;