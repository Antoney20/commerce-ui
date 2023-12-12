import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home  from "./components/Home.jsx";



import Contact from './components/Contact.jsx'


export default function App() {
  return (
    <Router>
    <div className='app'>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
    </Router>

  );
}