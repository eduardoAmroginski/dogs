import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../../Contexts/UserContext";

import { ReactComponent as IconFeed } from "../../../Assets/feed.svg";
import { ReactComponent as IconStats } from "../../../Assets/estatisticas.svg";
import { ReactComponent as IconPost } from "../../../Assets/adicionar.svg";
import { ReactComponent as IconQuit } from "../../../Assets/sair.svg";

import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const [mobile, setMobile] = useState(null);
  const { userLogout } = useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end activeClassName={styles.active}>
        <IconFeed />
        {mobile && "Minhas Fotos"}
      </NavLink>
      <NavLink to="/conta/estatisticas" activeClassName={styles.active}>
        <IconStats />
        {mobile && "Minhas Estatísticas"}
      </NavLink>
      <NavLink to="/conta/postar" activeClassName={styles.active}>
        <IconPost />
        {mobile && "Adicionar Foto"}
      </NavLink>
      <button onClick={userLogout}>
        <IconQuit />
        {mobile && "Sair"}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
