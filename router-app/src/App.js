import './App.css';
import React from 'react-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import NoPage from './components/NoPage'

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/blogs" exact element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/nopage" element={<NoPage />} />
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
