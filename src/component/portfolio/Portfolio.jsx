import React from "react"
import "./portfolio.css"
import Card from "./Card"
import portfolioData from "./portfolioData"
// import PopUpBox from "./portfolioPop"

const Portfolio = (props) => {
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading text-center '>
            <h4>VISIT MY PROJECTS AND GIVE YOUR FEEDBACK</h4>
            <h1>My Projects</h1>
          </div>

          <div className='content grid'>
            {portfolioData.map((value, index) => {
              return <Card  key={index} image={value.image} category={value.category}  title={value.title} desc = {value.desc} link = {value.link} />
            })}  
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio