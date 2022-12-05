import Link from "next/link";
import React from "react";
import styles from "../../styles/Navbar.module.scss";

const Navbar = () => {
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
      <div className={styles.auth}>
        <h6>John</h6>
        <button>Logout</button>
      </div>
      <div className={styles.write}>
        <Link href="/write">Write</Link>
      </div>
    </div>
  );
};

export default Navbar;
