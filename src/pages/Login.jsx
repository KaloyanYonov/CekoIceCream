import { motion } from "framer-motion";
import { useState } from "react";
import "../styles/Forms.css";
import { Header } from "./Header";

export function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [logged, setLogged] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length <= 3) {
      setError("Invalid username");
      return;
    }
    if (password.length < 8) {
      setError("Invalid password!");
      return;
    }
    setError("");
    setLogged(true);
  };

  return (
    <motion.div
      className="formPage"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.4 }}
    >
      <Header/>
      <div>
        <h1 className="formTitle">Login</h1>
        <form onSubmit={handleSubmit} className="formContainer">
          <input
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        {error && <p>{error}</p>}
      </div>
    </motion.div>
  );
}
