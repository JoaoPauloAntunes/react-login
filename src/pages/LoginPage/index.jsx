import React, { useState, useContext } from 'react';

import { AuthContext } from '../../contexts/auth';

import './styles.css';

const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('submit', { email, password });
    login(email, password); // integração com o meu contexto /api
  }

  return (
    <div id="login">
      <h1 className="title">Login do sistema</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="" className="email">Email</label>
          <input type="email" name="email" id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="" className="password">Senha</label>
          <input type="password" name="password" id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="actions">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage