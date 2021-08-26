import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../../Contexts/UserContext";

import useForm from "../../../Hooks/useForm";
import Button from "../../Forms/Button/Button";
import Input from "../../Forms/Input/Input";
import Error from "../../Helper/Error/Error";
import Head from "../../Helper/Head/Head";

import styles from "./LoginForm.module.css";
import stylesBtn from "../../Forms/Button/Button.module.css";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && "Dados incorretos"} />
      </form>
      <Link className={styles.lost} to="/login/perdeu">
        Esqueceu a senha?
      </Link>

      <div className={styles.register}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
