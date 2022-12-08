import React, { useState } from "react";
import Link from "next/link";
import Error from "../components/Error";
import { ErrorType, User } from "../types/types";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "../styles/Register.module.scss";

const Register = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [error, setError] = useState<ErrorType>({
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    setError({ message: "" });

    // PASSWORD CHECK
    if (user?.password !== passwordConfirm) {
      return setError({ message: "Passwords does not match!" });
    }

    try {
      // REGISTERING
      await axios.post(process.env.API_URL + "/auth/register", user);
      router.push("/");
    } catch (err: any) {
      console.log(err);
      setError({ message: err.response.data });
    }
  };

  return (
    <div className={styles.container}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <h6>
          Already have an account? <Link href="/login">Login</Link>
        </h6>
        <input
          required
          type="text"
          placeholder="Username"
          onChange={handleChange}
          name="username"
        />
        <input
          required
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
        />
        <input
          required
          type="password"
          placeholder="Password"
          onChange={handleChange}
          name="password"
        />
        <input
          required
          type="password"
          placeholder="Password Confirm"
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <button onClick={handleSubmit}>Register</button>
        <Error error={error} />
      </form>
    </div>
  );
};

export default Register;
