import React, { useState, useEffect } from 'react';

export const TaskContext = React.createContext([]);

export const TaskContextProvider = ({ children }) => {
    
    // Trazendo os dados da coleção tasks
    const data = JSON.parse(localStorage.getItem('tasks')) || [];

    const [tasks, setTasks] = useState(data);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const [editItem, setEditItem] = useState(null);

    // Adicionar tarefa
    const addTask = text => {
        const id = Math.floor(Math.random() * 10000 + 1);

        const newTask = { id, text };

        setTasks([...tasks, newTask]);      
    };

    // Deletar tarefa
    const deleteTask = id => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    // Encontrar tarefa
    const findTask = id => {
        const item = tasks.find(task => task.id === id);

        setEditItem(item);
    };

    // Editar tarefa
    const editTask = (text, id) => {
        const newTasks = tasks.map(task => {
            return task.id === id ? { text, id } : task
        });

        setTasks(newTasks);

        setEditItem(null);

    };

    // Marcar/desmarcar tarefa concluída 
    const toggleTaskCompleted = id => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    return (
        <TaskContext.Provider 
            value={{ 
                tasks, 
                addTask, 
                deleteTask, 
                findTask, 
                editTask, 
                editItem, 
                toggleTaskCompleted,
            }}
        >
            { children }
        </TaskContext.Provider>
    );
};
