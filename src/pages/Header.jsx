import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Header({testLogin , testLoginFun}) {
  const navigate = useNavigate();

  function signUp() {
    navigate("/signUp");
  }

  function login() {
    navigate("/login");
  }


  return (
    <>
      <header>
        <nav>
          {!testLogin ? (
            <div>
              <button className="navBtn" onClick={testLoginFun}>
                Test Login
              </button>
              <button className="navBtn" onClick={signUp}>
                Sign up
              </button>
              <button className="navBtn" onClick={login}>
                Login
              </button>
            </div>
          ) : (
            <button className="navBtn" onClick={testLoginFun}>
              Test Loguot
            </button>
          )}
        </nav>
      </header>
    </>
  );
}
