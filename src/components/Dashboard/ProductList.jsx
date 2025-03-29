import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductList.css";
import {Link} from 'react-router-dom'

const ProductList = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false); 

  const categories = ["all", "jewelery", "men's clothing", "women's clothing", "electronics"];

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setItems(response.data);
        setFilteredItems(response.data); 
      });
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredItems(items);
    } else {
      setFilteredItems(items.filter(item => item.category === category));
    }
    setIsCategoryOpen(false); // Close category menu after selection (for mobile)
  };

  if (items.length === 0) 
  return <div class="spinner-border" role="status" style={{marginTop:"45px",marginLeft:"600px"}}>
  <span class="sr-only"></span>
</div>;

  return (

<>
    <h3 style={{display:"flex",justifyContent:"center",marginTop:"10px"}}> Our Products </h3>

    <div className="main-container">
      

      
     
      <button className="category-toggle" onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
        {isCategoryOpen ? "Hide Categories" : "Show Categories"}
      </button>

      
      <div className={`categories ${isCategoryOpen ? "active" : ""}`}>
        <span className="category-title">Category</span>
        <div className="category-list">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className={`category-item ${selectedCategory === category ? "active" : ""}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category.toUpperCase()}
            </div>
          ))}
        </div>
      </div>

      
      <div className="products">
        {filteredItems.map((item) => (
          <div key={item.id} className="card-container">
           <Link to={`/productsList/${item.id}`} style={{ textDecoration: "none", color: "black" }}><img src={item.image} alt={item.title} style={{ height: "22vh", width: "93%", padding: "5px" }} />  </Link> 
           
            <h6 style={{marginTop:"10px"}}>Category: {item.category}</h6>
            <span style={{marginTop:"-18px"}}>Rating: {item.rating.rate}⭐</span>
          </div>
        ))}
      </div>

    </div>
    </>
  );
};

export default ProductList;
