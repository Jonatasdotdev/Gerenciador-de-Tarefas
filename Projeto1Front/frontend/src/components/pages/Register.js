import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', { email, password });
      navigate('/login');
    } catch (err) {
      alert('Erro ao cadastrar usuário');
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
        <button type="button" onClick={() => navigate('/login')}>
          Voltar para Login
        </button>
      </form>
    </div>
  );
}

export default Register;
