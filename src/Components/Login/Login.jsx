import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import LoginForm from "./LoginForm/LoginForm";
import LoginCreate from "./LoginCreate/LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost/LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset/LoginPasswordReset";
import NotFound from "../NotFound/NotFound";

import { UserContext } from "../../Contexts/UserContext";

import styles from "./Login.module.css";

const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
