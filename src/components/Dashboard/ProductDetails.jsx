import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // ✅ Import Link
import axios from "axios";
import "./ProductDetails.css";


import { ToastContainer, toast } from 'react-toastify';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);


  const notify = () => toast.success("Added to cart");

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);

        // Fetch all products and filter related ones
        axios.get("https://fakestoreapi.com/products").then((res) => {
          const related = res.data.filter(
            (item) => item.category === response.data.category && item.id !== response.data.id
          );
          setRelatedProducts(related);
        });
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!product) 
    return <div class="spinner-border" role="status" style={{marginTop:"45px",marginLeft:"600px"}}>
  <span class="sr-only"></span>
</div>

  return (
    <div className="product-details-container">
      {/* Product Image */}
      <div className="product-images">
        <img src={product.image} alt={product.title} className="main-image" />
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h2>{product.title}</h2>
        <div className="rating">
          ⭐ {product.rating.rate} <span>({product.rating.count} reviews)</span>
        </div>

        <div className="price-section">
          <span className="old-price">${(product.price * 1.2).toFixed(2)}</span>
          <span className="new-price">${product.price}</span>
        </div>

        <p className="product-description">{product.description}</p>

        <p className="category">
          <strong>Category:</strong> {product.category}
        </p>

        <div > 
          <button class="btn btn-danger" onClick={notify}>Add to cart</button>
          <ToastContainer />
           </div>
      </div>

      {/* Related Products Section */}
      <div className="related-products-section">
        <h3>Related Products</h3>
        <div className="related-products-container">
          {relatedProducts.length > 0 ? (
            relatedProducts.map((item) => (
              <div key={item.id} className="related-product-card">
                {/* <Link to={`/productsList/${item.id}`}>
                  <img src={item.image} alt={item.title} />
                  <p>{item.title.length > 10 ? item.title.slice(0, 10) + "..." : item.title}</p>
                </Link> */}


                  <img src={item.image} alt={item.title} />
                  <p>{item.title.length > 10 ? item.title.slice(0, 10) + "..." : item.title}</p>
                
              </div>
            ))
          ) : (
            <p>No related products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
