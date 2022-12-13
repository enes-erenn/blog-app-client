import React from "react";
import Posts from "../components/Posts";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Posts />
    </div>
  );
}
