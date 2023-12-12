import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav  from "./components/Nav.jsx";
import Banner from './components/Banner.jsx'
import Home from './components/Home.jsx'
import Blog from './components/Blog.jsx'



import Contact from './components/Contact.jsx'


export default function App() {
  return (
    <Router>
    <>
    <Banner/>
    <Nav/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
    </Router>

  );
}