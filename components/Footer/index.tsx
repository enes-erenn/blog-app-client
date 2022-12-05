import React from "react";
import styles from "../../styles/Footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles.container}>
      <p>logo</p>
      <span>© {new Date().getFullYear()} ALL RIGHTS RESERVED.</span>
    </footer>
  );
};

export default Footer;
