import './App.css';
import React from 'react-dom'
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import NoPage from './components/NoPage'

function App() {
  return (
    <div className='App'>
      <h1>App Component</h1>
    <Router className="App">
    <Link to="/" >Home</Link><br/>
    <Link to="/leyout" >Leyout</Link><br/>
    <Link to="/blogs" >Blogs</Link><br/>
    <Link to="/contact" >Contact</Link><br/>
    <NavLink activeStyle={{color: "red"}} to="/nopage" >NoPage</NavLink><br/>
    {/* <NavLink activeStyle={{color: 'orange'}} to="/nopage1" >NoPage1</NavLink><br/> */}
    {/* <NavLink activeStyle={{color:'red'}} to="/nopage2" >NoPage2</NavLink><br/> */}
    <Routes>
      <Route path="/leyout" element={<Layout />}/>
      <Route index element={<Home />} />
      <Route path="/blogs" exact element={<Blogs />} />
      <Route path="/contact" exact strict element={<Contact />} />
      <Route path="/nopage" element={<NoPage />} />
    </Routes>
  </Router>
  </div>
  );
}

export default App;
