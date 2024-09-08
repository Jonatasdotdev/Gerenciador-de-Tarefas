import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import TaskManager from './components/pages/TaskManager';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/tasks" element={<TaskManager />} />
    </Routes>
  );
}

export default App;
