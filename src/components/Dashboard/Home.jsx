import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "./Home.css"; 
import Swiper from "./Carousel";
import Carousel from "./Carousel";
import shoes from './DashboardAssets/shoes.jpg'
import j from './DashboardAssets/j.jpg'
import bag from './DashboardAssets/bag.jpg'
import sale from './DashboardAssets/sal.jpg'
import { ToastContainer, toast } from "react-toastify";
import fb from './DashboardAssets/fb.svg'
import insta from './DashboardAssets/instagram.png'
import t from './DashboardAssets/t.png'


const Home = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      toast.error("Please enter a valid email!");
      return;
    }
    toast.success("Subscribed ");
    setEmail(""); // Clear input after submission
  };


  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".featured-products");
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-container">
      


   

      <div>
        <Carousel/>
      </div>

      {/* Hero Section */}
      <header className="hero-section">

        <div className="container text-center animated-border">
          <h1>Welcome to Our Store</h1>
          <p>Find the best products at the best prices.</p>
        </div>

        
      </header>



      {/* //transition for cards */}

      {/* Featured Products */}
      {/* <section className="featured-products container">
        <h2 className="text-center">Trending Products</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src={shoes} className="card-img-top" alt="Product" />
              <div className="card-body">
                <h5 className="card-title">Sneekers</h5>
                <p className="card-text">Best quality at the best price.</p>
                
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={j} className="card-img-top" alt="Product" />
              <div className="card-body">
                <h5 className="card-title">Jewellery</h5>
                <p className="card-text">Trending and stylish.</p>
                
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={bag} className="card-img-top" alt="Product" />
              <div className="card-body">
                <h5 className="card-title">Bag</h5>
                <p className="card-text">Limited stock available.</p>
                
              </div>
            </div>
          </div>
        </div>
      </section> */}



<section className={`featured-products container ${isVisible ? "show" : ""}`}>
      <h2 className="text-center">Trending Products</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src={shoes} className="card-img-top" alt="Product" />
            <div className="card-body">
              <h5 className="card-title">Sneakers</h5>
              <p className="card-text">Best quality at the best price.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={j} className="card-img-top" alt="Product" />
            <div className="card-body">
              <h5 className="card-title">Jewellery</h5>
              <p className="card-text">Trending and stylish.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={bag} className="card-img-top" alt="Product" />
            <div className="card-body">
              <h5 className="card-title">Bag</h5>
              <p className="card-text">Limited stock available.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


<div className="shop-image">
<img src={sale}/>
</div>

      <section className="Highest-rating-products">
        <h2 className="text-center">Highest Rating Products</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" className="card-img-top" alt="Product" />
              <div className="card-body">
                <h5 className="card-title">Portable External Hard Drive</h5>
                <p className="card-text">Rating : 4.8⭐</p>
                
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg" className="card-img-top" alt="Product" />
              <div className="card-body">
                <h5 className="card-title">Removable Hooded Faux</h5>
                <p className="card-text">Rating : 4.5⭐</p>
                
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" className="card-img-top" alt="Product" />
              <div className="card-body">
                <h5 className="card-title">Pierced Owl Rose Gold</h5>
                <p className="card-text">Rating : 4.3⭐</p>
                
              </div>
            </div>
          </div>
        </div>
      </section>




      <div className="subscribe">
      <h4>NEWSLETTER</h4>
      <h2>SIGN UP FOR LATEST UPDATES AND OFFERS</h2>
      <form onSubmit={handleSubscribe} className="subscribe-form">
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>



      

      </form>
      <p>Will be used in accordance with our Privacy Policy</p>
      <ToastContainer position="top-right" autoClose={2000} />


      <div className="footer-social">

<i className="fab fa-facebook"><img src={fb} alt="fb" /></i>
<i className="fab fa-twitter"><img src={insta} /></i>
<i className="fab fa-instagram"> <img src={t} style={{height:"16px"}} /> </i>


</div>
    </div>







<footer className="footer">
  
      <div className="footer-bottom" >
       <span> &copy; 2024 Shopify | All rights reserved. </span>
      </div>
    </footer>



    </div>
  );
};

export default Home;





