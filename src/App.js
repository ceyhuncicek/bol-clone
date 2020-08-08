import React, { useEffect } from "react";
import "./App.css";
import { Routes } from "./routes.js";
import { useStateValue } from "./StateProvider.js";
import { auth } from "./firebase";

function App() {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // user login
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        // user logout
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });

    return () => {
      // cleanup
      unsubscribe();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <Routes />;
}

export default App;
