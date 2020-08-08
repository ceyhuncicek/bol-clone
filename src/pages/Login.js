import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const login = event => {
    event.preventDefault(); //stop refresh
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        //redirect to homepage
        history.push("/");
      })
      .catch(e => alert(e.message));
  };
  const register = event => {
    event.preventDefault(); //stop refresh
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        //redirect to homepage
        history.push("/");
      })
      .catch(e => alert(e.message));
  };
  return (
    <div className="login">
      {/* <Link to="/">go to home</Link> */}
      <div className="login__container">
        <h1 className="login__title">Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={event => setEmail(event.target.value)}
            placeholder="E-mail Adress"
          />
          <h5>Password</h5>
          <input
            type="text"
            value={password}
            onChange={event => setPassword(event.target.value)}
            placeholder="password"
          />
          <br />
          <button type="submit" onClick={login} className="login__btn">
            Sign in
          </button>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
            neque magni in, consectetur iusto doloribus, quidem cupiditate cum
            perspiciatis illo quae ratione! Ut atque officia error a eaque
            beatae cum.
          </p>
          <button type="submit" onClick={register} className="register__btn">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
