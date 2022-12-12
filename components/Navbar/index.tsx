import React, { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "../../context/authContext";
import CurrentUser from "./CurrentUser";
import Image from "next/image";
import styles from "../../styles/Navbar.module.scss";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className={styles.container}>
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
      <div className={styles.right}>
        <CurrentUser user={currentUser} logout={logout} />
        <div className={styles.write}>
          <Link href="/write">Write</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
