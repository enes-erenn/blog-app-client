import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Link href="/">
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <Image
            src={
              "https://res.cloudinary.com/dnlxubidd/image/upload/v1670869682/Yasemin_qxkrpm.png"
            }
            alt={"Logo"}
            width="96"
            height="96"
            objectFit="contain"
          />
        </div>
      </Link>
      <span>© {new Date().getFullYear()} ALL RIGHTS RESERVED.</span>
    </footer>
  );
};

export default Footer;
