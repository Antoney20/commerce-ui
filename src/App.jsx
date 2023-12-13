import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav  from "./components/Nav.jsx";
import Banner from './components/Banner.jsx';

import Home from './components/Home.jsx'
import Products from './components/Products'
import Blog from './components/Blog.jsx'
import Footer  from './components/Footer.jsx'
import Contact from './components/Contact.jsx'


export default function App() {
  return (
    <Router>
    <>
    <Banner/>
    <Nav/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    <Footer/>
    </>
    </Router>

  );
  
}