import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Forms/Button/Button';
import Input from '../../Forms/Input/Input';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit (event) {
    event.preventDefault();

    const data = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    };

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', data)
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(json => {
        console.log(json);
      });
  }

  return (
    <section>
      <h1>Login</h1>
      <form action='' onSubmit={handleSubmit}>
        <Input label='Usuário' type='text' name='username' />
        <Input label='Senha' type='password' name='password' />
        <Button>Entrar</Button>
      </form>
      <Link to='/login/criar'>Cadastro</Link>
    </section>

  );
};

export default LoginForm;
