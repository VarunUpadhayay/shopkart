import React, { useState, useEffect } from "react";
import "../style/Products.css";
import line2 from "../images/line2.png";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("electronics");
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    async function fetchCategories() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchProducts();
    fetchCategories();
  }, []);

  const displayedCategory = selectedCategory;

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  const handlePrevClick = () => {
    if (scrollX > 0) {
      setScrollX(scrollX - 1);
    }
  };

  const handleNextClick = () => {
    const maxScroll = Math.ceil(filteredProducts.length / 3) - 1;
    if (scrollX < maxScroll) {
      setScrollX(scrollX + 1);
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="head">
          <h1 className="products-head"> New Products</h1>
          <img src={line2} />
        </div>

        <div className="product-list">
          <div className="category-list">
            {categories.map((category) => (
              <button
                key={category}
                className={selectedCategory === category ? "selected" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="product-container">
            <div className="slider-controls">
              <button onClick={handlePrevClick}>&larr;</button>
              <button onClick={handleNextClick}>&rarr;</button>
            </div>
            <div
              className="product-slider"
              style={{ transform: `translateX(-${scrollX * 635}px)` }}
            >
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                  />
                  <h3>{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                  <span className="price">${product.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
