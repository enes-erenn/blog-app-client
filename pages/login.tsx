import React, { useContext, useState } from "react";
import Link from "next/link";
import Error from "../components/Error";
import { ErrorType, User } from "../types/types";
import { useRouter } from "next/router";
import { AuthContext } from "../context/authContext";
import styles from "../styles/Login.module.scss";

const Login = () => {
  const router = useRouter();
  const { login } = useContext(AuthContext);
  const [error, setError] = useState<ErrorType>({
    message: "",
  });

  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    setError({ message: "" });
    if (!login) return;

    try {
      // LOGIN
      await login(user);
      router.push("/");
    } catch (err: any) {
      console.log(err);
      setError({ message: err.response.data });
    }
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <h4>
          Don&apos;t you have an account? <Link href="/register">Register</Link>
        </h4>
        <input
          required
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        <Error error={error} />
      </form>
    </div>
  );
};

export default Login;
