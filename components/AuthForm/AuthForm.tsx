"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import styles from "./AuthForm.module.css";

type Props = {
  mode: "login" | "signup";
};

export default function AuthForm({ mode }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isLogin = mode === "login";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log({ email, password });
  }

  return (
    <div className="center-content">
      <div className="page-content">
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1 className="form-title">
            {isLogin ? "Log in to Your Account" : "Sign up for an Account"}
          </h1>

          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="password">Password</label>
            <div className={styles.passwordWrapper}>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className={styles.toggle}
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            {isLogin ? "Log in" : "Sign up"}
          </button>

          <p className={styles.switchLink}>
            {isLogin ? (
              <>
                Don&apos;t have an account? <Link href="/signup">Sign up</Link>
              </>
            ) : (
              <>
                Already have an account? <Link href="/login">Log in</Link>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
}
