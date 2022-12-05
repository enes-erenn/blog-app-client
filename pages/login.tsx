import React, { useState } from "react";
import Link from "next/link";
import Error from "../components/Error";
import styles from "../styles/Login.module.scss";
import { ErrorType } from "../components/Error/index";

const Login = () => {
  const [error, setError] = useState<ErrorType>({
    message: "",
  });

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form>
        <h6>
          Don&apos;t you have an account? <Link href="/register">Register</Link>
        </h6>
        <input required type="email" placeholder="Email" />
        <input required type="password" placeholder="Password" />
        <button>Login</button>
        <Error error={error} />
      </form>
    </div>
  );
};

export default Login;
