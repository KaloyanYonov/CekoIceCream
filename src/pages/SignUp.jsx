import { useState } from "react";
import "../styles/Forms.css";
import { motion } from "framer-motion";


export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [length, setLength] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length < 3) {
      setError("Name must be at least 3 characters.");
      return;
    }
    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }
    if (age <= 18 || isNaN(age)) {
      setError("You must be 18 or older to register!");
      return;
    }
    if (length > 30 || isNaN(length)) {
      setError("You are lying!");
      return;
    }
    if (password.length < 8) {
      setError("Your password is too short!");
      return;
    }
    setError("");
    alert("Form submitted successfully!");
  };

  return (
    <motion.div
      className="formPage"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.4 }}
    >
      <div>
        <h1 className="formTitle">Sign Up</h1>
        <form className="formContainer" onSubmit={handleSubmit}>
          <input
            value={name}
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            value={email}
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            value={age}
            type="number"
            placeholder="Enter your age"
            onChange={(e) => setAge(Number(e.target.value))}
            required
          />
          <input
            value={length}
            type="number"
            placeholder="Enter your length (in cm)"
            onChange={(e) => setLength(Number(e.target.value))}
            required
          />
          <button type="submit">Submit</button>
        </form>

        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </div>
    </motion.div>
  );
}
