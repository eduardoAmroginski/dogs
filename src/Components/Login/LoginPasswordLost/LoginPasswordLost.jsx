import React from "react";

import Input from "../../Forms/Input/Input";
import Button from "../../Forms/Button/Button";
import Error from "../../Helper/Error/Error";

import useForm from "../../../Hooks/useForm";
import useFetch from "../../../Hooks/useFetch";

import { PASSWORD_LOST } from "../../../api";

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  const site = window.location.href.replace("perdeu", "resetar");

  async function handleSubmit(event) {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: site,
      });

      const { json } = await request(url, options);
    }
  }

  return (
    <section>
      <h1 className="title">Esqueceu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="email" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar</Button>
          )}
          {error && <Error error={error} />}
        </form>
      )}
    </section>
  );
};

export default LoginPasswordLost;
