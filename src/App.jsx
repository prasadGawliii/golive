
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Home from './components/Dashboard/Home';
import ProductList from './components/Dashboard/ProductList';
import Navbar from './components/Dashboard/Navbar';
import ProductDetails from './components/Dashboard/ProductDetails';

function App() {
 

  return (
    <>

<Router>
  <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/" element={<Navigate to="/home" />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        
        <Route path="/productsList" element={<ProductList/>} />
        <Route path="/productsList/:id" element={<ProductDetails/>} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
