import React from "react";
import { User } from "../../../types/types";
import styles from "../../../styles/Navbar.module.scss";

interface Props {
  user?: User | null;
  logout?: (user: User) => void | null;
}

const CurrentUser: React.FC<Props> = ({ user, logout }) => {
  if (user && logout) {
    return (
      <div className={styles.auth}>
        <h6>{user?.username}</h6>
        <button onClick={() => logout(user)}>Logout</button>
      </div>
    );
  }
  return <></>;
};

export default React.memo(CurrentUser);
