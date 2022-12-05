import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Footer />
    </div>
  );
}
