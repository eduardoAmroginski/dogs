import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../../Contexts/UserContext";

import { ReactComponent as IconFeed } from "../../../Assets/feed.svg";
import { ReactComponent as IconStats } from "../../../Assets/estatisticas.svg";
import { ReactComponent as IconPost } from "../../../Assets/adicionar.svg";
import { ReactComponent as IconQuit } from "../../../Assets/sair.svg";

import useMedia from "../../../Hooks/useMedia";

import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
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
    </>
  );
};

export default UserHeaderNav;
