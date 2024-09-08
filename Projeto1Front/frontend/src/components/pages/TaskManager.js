import React, { useState, useEffect } from 'react';
import api from '../services/api';
import './styles.css';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const token = localStorage.getItem('token');  
  
  const loadTasks = async () => {
    try {
      const response = await api.get('/tasks', {
        headers: {
          Authorization: `Bearer ${token}`,  // Adiciona o token no cabeçalho
        },
      });
      setTasks(response.data);
    } catch (err) {
      console.error('Erro ao carregar tarefas:', err);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const createTask = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/tasks', {
        title: newTaskTitle,
        description: newTaskDescription,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,  // Adiciona o token no cabeçalho
        },
      });
      setTasks([...tasks, response.data]);
      setNewTaskTitle('');
      setNewTaskDescription('');
    } catch (err) {
      console.error('Erro ao criar tarefa:', err);
    }
  };

  const toggleTaskCompletion = async (id, completed) => {
    try {
      await api.put(`/tasks/${id}`, { completed: !completed }, {
        headers: {
          Authorization: `Bearer ${token}`,  // Adiciona o token no cabeçalho
        },
      });
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, completed: !completed } : task
        )
      );
    } catch (err) {
      console.error('Erro ao atualizar tarefa:', err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,  // Adiciona o token no cabeçalho
        },
      });
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (err) {
      console.error('Erro ao excluir tarefa:', err);
    }
  };

  return (
    <div>
      <h2>Gerenciamento de Tarefas</h2>
      <form onSubmit={createTask}>
        <input
          type="text"
          placeholder="Título da tarefa"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Descrição da tarefa"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
          required
        />
        <button type="submit">Adicionar Tarefa</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong
                  style={{
                    textDecoration: task.completed ? 'line-through' : 'none',
                    color: task.completed ? '#bbb' : '#fff'
                  }}
                >
                  {task.title}
                </strong>
                <p>{task.description}</p>
              </div>
              <div>
                <button
                  onClick={() => toggleTaskCompletion(task.id, task.completed)}
                  style={{ marginRight: '5px' }}
                >
                  {task.completed ? '✔️' : 'Marcar como Concluída'}
                </button>
                <button onClick={() => deleteTask(task.id)}>Excluir</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
