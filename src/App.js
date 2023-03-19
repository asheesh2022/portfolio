import React from 'react'
import Home from './component/home/Home';
import Navbar from './component/navbar/Navbar';
import "./App.css"
import Contact from './component/contact/Contact';
import Portfolio from './component/portfolio/Portfolio';
import Resume from './component/resume/Resume';
import Footer from './component/footer';
import Skill from './component/featured/Skill';
const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Skill/>
      <Portfolio/>
      <Resume/>
      <Contact/>
      <Footer/>
    </>
  )
}




export default App;
