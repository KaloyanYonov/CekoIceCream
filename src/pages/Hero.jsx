import { useNavigate } from "react-router-dom";
import "../styles/Hero.css";

export function Hero() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/main");
  }

  return (
    <div className="heroSection">
      <div className="textSection">
        <h1 className="welcomeMsg">
          <span className="line1">Welcome to</span>
          <span className="line2">Ceko’s</span>
          <span className="line3">Ice Cream</span>
        </h1>

        <div className="iceCreamButton">
          <div className="iceCreamStick"></div>
          <button className="getStartedBtn" onClick={handleClick}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
