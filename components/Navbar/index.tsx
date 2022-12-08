import React, { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "../../context/authContext";
import CurrentUser from "./CurrentUser";
import styles from "../../styles/Navbar.module.scss";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <div>
        <p>logo</p>
      </div>
      <ul>
        <Link className={styles.link} href="/software-development">
          <h6>SOFTWARE DEVELOPMENT</h6>
        </Link>
        <Link className={styles.link} href="/personal-development">
          <h6>PERSONAL DEVELOPMENT</h6>
        </Link>
        <Link className={styles.link} href="/design">
          <h6>DESIGN</h6>
        </Link>
      </ul>
      <CurrentUser user={currentUser} logout={logout} />
      <div className={styles.write}>
        <Link href="/write">Write</Link>
      </div>
    </div>
  );
};

export default Navbar;
