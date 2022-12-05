import React, { useState } from "react";
import Link from "next/link";
import Error, { ErrorType } from "../components/Error";
import styles from "../styles/Register.module.scss";

const Register = () => {
  const [error, setError] = useState<ErrorType>({
    message: "",
  });

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form>
        <h6>
          Already have an account? <Link href="/login">Login</Link>
        </h6>
        <input required type="email" placeholder="Email" />
        <input required type="password" placeholder="Password" />
        <input required type="password" placeholder="Password Confirm" />
        <button>Login</button>
        <Error error={error} />
      </form>
    </div>
  );
};

export default Register;
