import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    console.log(data); // tratați răspunsul în consecință (afișați mesajul, redirecționați, etc.)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Utilizator"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Parolă"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Autentificare</button>
    </form>
  );
};

export default LoginForm;