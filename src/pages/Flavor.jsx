import { useParams } from "react-router-dom";
import { useState } from "react";
import { Header } from "./Header";
import "../styles/Flavors.css";
import { motion } from "framer-motion";

export function Flavor() {
  const { flavor } = useParams();
  const [grams, setGrams] = useState(100);

  const data = {
    strawberry: {
      image: "../src/assets/strawberry.jpg",
      title: "Strawberry",
      description:
        "Juicy, sweet, and made with real berries. Our Strawberry flavor is perfect for a summer vibe!",
      pricePer100g: 2.5,
    },
    chocolate: {
      image: "../src/assets/chocolate.jpg",
      title: "Chocolate",
      description:
        "A rich cocoa delight that's every chocoholic's dream. Smooth and indulgent!",
      pricePer100g: 3.0,
    },
    vanilla: {
      image: "../src/assets/vanilla.jpg",
      title: "Vanilla",
      description:
        "Classic, creamy, and elegant. Vanilla never goes out of style.",
      pricePer100g: 2.0,
    },
    "forest-fruits": {
      image: "../src/assets/forest-fruits.jpg",
      title: "Forest Fruits",
      description:
        "A mix of wild berries bursting with fruity flavor — a tangy, refreshing favorite!",
      pricePer100g: 2.8,
    },
  };

  const selectedFlavor = data[flavor];
  if (!selectedFlavor) {
    return <h2 style={{ textAlign: "center" }}>Flavor not found 😢</h2>;
  }

  const { image, title, description, pricePer100g } = selectedFlavor;
  const totalPrice = ((grams / 100) * pricePer100g).toFixed(2);

  return (
    <motion.div
      className="formPage"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.4 }}
    >
      <Header />
      <div className="flavorPageBox">
        <h1>{title}</h1>
        <img src={image} className="flavorImage" alt={title} />
        <p className="flavorDescription">{description}</p>

        <div className="priceBox">
          <label htmlFor="grams">Enter grams:</label>
          <input
            id="grams"
            type="number"
            min="50"
            step="50"
            value={grams}
            onChange={(e) => setGrams(Number(e.target.value))}
          />
          <p>
            💸 Price per 100g: <strong>{pricePer100g.toFixed(2)} BGN</strong>
          </p>
          <p>
            🧾 Total Price: <strong>{totalPrice} BGN</strong>
          </p>
          <button className="purchaseBtn">Confirm Purchase</button>
        </div>
      </div>
    </motion.div>
  );
}
