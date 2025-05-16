import { useNavigate } from "react-router-dom";
import "../styles/MainPage.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { Header } from "./Header";

export function MainPage() {
  const navigate = useNavigate();
  const [testLogin, setTestLogin] = useState(false);

  function buyNow({ flavor }) {
    if (testLogin) {
      navigate(`/flavor/${flavor}`);
    } else {
      alert("You must login to continue *hint : press the Test login button!*");
    }
  }


  function testLoginFun() {
    setTestLogin((prev) => !prev);
  }


  return (
    <motion.div
      className="formPage"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.4 }}
    >
      <Header testLogin={testLogin} testLoginFun={testLoginFun}/>
      <div className="mainPage">
        <main>
          <h1>Our Flavours:</h1>
          <h2 className="flavorTitle">Strawberry</h2>
          <div className="flavorCard-left">
            <img
              className="flavor-img"
              src="../src/assets/strawberry.jpg"
              alt="Strawberry"
            />
            <p>
              Fresh and fruity! Our Strawberry flavor is made with real berries
              for a juicy summer treat.
              <br />
              <br />
              Every scoop bursts with the sweet and tangy taste of hand-picked
              strawberries. It’s light, refreshing, and pairs perfectly with
              chocolate or vanilla. Whether you're young or just young at heart,
              this timeless classic is sure to make your taste buds dance.
            </p>

            <button
              className="navBtn"
              onClick={() => buyNow({ flavor: "strawberry" })}
            >
              Buy now!
            </button>
          </div>
          <h2 className="flavorTitle">Chocolate</h2>
          <div className="flavorCard-right">
            <img
              className="flavor-img"
              src="../src/assets/chocolate.jpg"
              alt="Chocolate"
            />
            <p>
              Rich, smooth, and indulgent — Chocolate lovers, this one’s for
              you.
              <br />
              <br />
              Crafted from premium cocoa, this deep and velvety treat delivers a
              luxurious experience in every bite. Perfect on its own or with
              toppings like fudge or caramel, it’s the comfort flavor everyone
              craves. Warning: may cause instant happiness.
            </p>
            <button
              className="navBtn"
              onClick={() => buyNow({ flavor: "chocolate" })}
            >
              Buy now!
            </button>
          </div>
          <h2 className="flavorTitle">Vanilla</h2>
          <div className="flavorCard-left">
            <img
              className="flavor-img"
              src="../src/assets/vanilla.jpg"
              alt="Vanilla"
            />
            <p>
              Simple yet timeless. Our creamy Vanilla flavor is a classic done
              right.
              <br />
              <br />
              Made with real vanilla bean and fresh cream, this flavor is
              anything but boring. Its silky texture and sweet aroma make it
              perfect as a base for sundaes or a companion to warm desserts.
              It’s elegance in a cone — smooth, subtle, and universally loved.
            </p>
            <button
              className="navBtn"
              onClick={() => buyNow({ flavor: "vanilla" })}
            >
              Buy now!
            </button>
          </div>
          <h2 className="flavorTitle">Forest fruits</h2>
          <div className="flavorCard-right">
            <img
              className="flavor-img"
              src="../src/assets/forest-fruits.jpg"
              alt="Forest Fruits"
            />
            <p>
              Wild and vibrant! A mix of berries bursting with flavor in every
              scoop.
              <br />
              <br />
              This juicy blend of blueberries, raspberries, blackberries, and
              strawberries offers a tangy twist to your day. It’s fruity, fun,
              and full of antioxidants (so it’s basically healthy, right?).
              Treat yourself to a scoop of the forest’s finest.
            </p>
            <button
              className="navBtn"
              onClick={() => buyNow({ flavor: "forest-fruits" })}
            >
              Buy now!
            </button>
          </div>
        </main>
      </div>
    </motion.div>
  );
}
