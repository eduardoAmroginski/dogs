import React, { useEffect, useState } from "react";

import Input from "../../Forms/Input/Input";
import Button from "../../Forms/Button/Button";
import Error from "../../Helper/Error/Error";

import useForm from "../../../Hooks/useForm";
import useFetch from "../../../Hooks/useFetch";

import { PASSWORD_RESET } from "../../../api";
import { useNavigate } from "react-router-dom";
import Head from "../../Helper/Head/Head";

const LoginPasswordReset = () => {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");
  const password = useForm();
  const { loading, error, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const keyParam = params.get("key");
    const loginParam = params.get("login");
    if (keyParam) setKey(keyParam);
    if (loginParam) setLogin(loginParam);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });

      console.log(options);

      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Resetar Senha" />
      <h1 className="title">Resetar Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
        {error && <Error error={error} />}
      </form>
    </section>
  );
};

export default LoginPasswordReset;
