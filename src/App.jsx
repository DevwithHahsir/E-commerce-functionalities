/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import counterContext from "./contextapi/countContext.js";


const ProductList = () => {
  const [showDetails, setShowDetails] = useState(false); // State to control visibility
  const [selectedProduct, setSelectedProduct] = useState(null); // State to keep track of selected product

  const [storedProduct, setStoredProduct] = useState([]); // use to store multiple items in local storage

  //count state
  const HandelCount = (e, id) => {
    // Corrected `findIndex` usage
    let index = products.findIndex((item) => item.id === id);

    if (index === -1) {
      // If the product is not found, return early
      console.error("Product not found!");
      return;
    }

    // Create a new card with the correct product details
    const NewCard = {
      ...products[index], // Spread the properties of the found product
    };

    // Update the storedProduct state with the new card
    const UpdateCard = [...storedProduct, NewCard];
    setStoredProduct(UpdateCard);

    localStorage.setItem("data", JSON.stringify(UpdateCard));
    // Store the updated array in localStorage
    
  };

  useEffect(() => {
    // Load data from localStorage if it exists
    const data = JSON.parse(localStorage.getItem("data")) || [];
    setStoredProduct(data);
  }, []);

  const handleDetails = (product) => {
    // console.log(product)
    setSelectedProduct(product); // Set the selected product details
    setShowDetails(true); // Show the details container
  };

  const handleCloseDetails = () => {
    setShowDetails(false); // Hide the details container
    setSelectedProduct(null); // Reset selected product
  };

  const products = [
    {
      id: 1,
      img: "https://via.placeholder.com/150",
      title: "Wireless Headphones",
      price: 49.99,
      detail:
        "Experience superior sound quality with these wireless headphones. Comfortable, lightweight, and with long-lasting battery life, they are perfect for music lovers and gamers alike. The sleek design and noise-canceling feature ensure an immersive experience whether at home or on the go.",
    },
    {
      id: 2,
      img: "https://via.placeholder.com/150",
      title: "Smart Watch",
      price: 79.99,
      detail:
        "Stay connected and monitor your health with this stylish smartwatch. It tracks your fitness activities, monitors your heart rate, and displays notifications. Its customizable watch faces and water-resistant design make it ideal for daily wear and fitness tracking on the go.",
    },
    {
      id: 3,
      img: "https://via.placeholder.com/150",
      title: "Bluetooth Speaker",
      price: 29.99,
      detail:
        "Enjoy rich, high-quality sound with this portable Bluetooth speaker. It is compact yet powerful, providing excellent bass and clear audio. With a battery life of up to 10 hours and a water-resistant build, it’s perfect for outdoor activities, parties, or relaxing at home.",
    },
    {
      id: 4,
      img: "https://via.placeholder.com/150",
      title: "Portable Charger",
      price: 19.99,
      detail:
        "Keep your devices powered up with this slim and portable charger. It’s compact and lightweight, fitting easily in your bag or pocket. With fast-charging capabilities and multiple USB ports, you can charge your phone, tablet, and other devices quickly and efficiently.",
    },
    {
      id: 5,
      img: "https://via.placeholder.com/150",
      title: "Laptop Stand",
      price: 39.99,
      detail:
        "Improve your posture and productivity with this adjustable laptop stand. It is sturdy, durable, and compatible with various laptop sizes. The stand’s design promotes better airflow and reduces neck and back strain, making it ideal for work, study, or home use.",
    },
    {
      id: 6,
      img: "https://via.placeholder.com/150",
      title: "Wireless Mouse",
      price: 14.99,
      detail:
        "This wireless mouse provides smooth and precise tracking, making it ideal for both work and play. Its ergonomic design ensures comfort, while its compact size is perfect for travel. With a reliable wireless connection and long battery life, it’s great for everyday use.",
    },
    {
      id: 7,
      img: "https://via.placeholder.com/150",
      title: "Mechanical Keyboard",
      price: 89.99,
      detail:
        "Elevate your typing and gaming experience with this high-quality mechanical keyboard. It features customizable RGB backlighting and tactile switches for responsive feedback. Built to last, its sturdy design is perfect for gamers, writers, and professionals who value precision and comfort.",
    },
    {
      id: 8,
      img: "https://via.placeholder.com/150",
      title: "USB-C Hub",
      price: 24.99,
      detail:
        "Expand your laptop or tablet’s connectivity with this versatile USB-C hub. It offers multiple ports, including HDMI, USB, and SD card slots, making it perfect for multitasking. Compact and portable, it’s ideal for travel, work, and connecting various peripherals.",
    },
    {
      id: 9,
      img: "https://via.placeholder.com/150",
      title: "Noise Cancelling Earbuds",
      price: 59.99,
      detail:
        "Block out the world and immerse yourself in your favorite music with these noise-cancelling earbuds. Designed for comfort and superior sound quality, they provide deep bass and clear highs. Perfect for commuting, working out, or simply relaxing at home.",
    },
    {
      id: 10,
      img: "https://via.placeholder.com/150",
      title: "Gaming Mouse Pad",
      price: 9.99,
      detail:
        "Enhance your gaming setup with this durable gaming mouse pad. It features a smooth surface for precise control and a non-slip base for stability during intense gaming sessions. Lightweight and easy to clean, it’s a perfect addition to any gamer’s desk.",
    },
  ];
  const basket = JSON.parse(localStorage.getItem("data")) || [];
  return (
    <>
      <counterContext.Provider value={basket.length}>
        <Navbar />

        <div className="main-container">
          {products.map((product) => (
            <div className="cards" key={product.id}>
              <img src={product.img} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <div className="btn-container">
                <button
                  className="buy"
                  onClick={(e) => {
                    HandelCount(e, product.id);
                  }}
                >
                  Buy
                </button>
                <button
                  className="description"
                  onClick={() => handleDetails(product)}
                >
                  Details
                </button>
              </div>
            </div>
          ))}

          {/* Details container */}
          {showDetails && selectedProduct && (
            <div className="main-detail-container">
              <div className="detail-container">
                <div className="img">
                  <img src={selectedProduct.img} alt={selectedProduct.title} />
                </div>
              </div>
              <div className="info">
                <div className="title">{selectedProduct.title}</div>
                <div className="price">${selectedProduct.price}</div>
                <div className="descriptionn">{selectedProduct.detail}</div>
                <button onClick={handleCloseDetails}>Close</button>
              </div>
            </div>
          )}
        </div>
      </counterContext.Provider>
    </>
  );
};

export default ProductList;
