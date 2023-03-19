import React from "react"
import "./home.css"
import asheesh from "../../assets/asheesh.jpg"
// import skill1 from "../pic/skill1.png"
// import skill2 from "../pic/skill2.png"
// import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            {/* <h3>WELCOME </h3> */}
            <h1>
              Hi, I’m <span>Asheesh mishra</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Professional Coder.", " Full stack Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>I have a passion for building and creating dynamic, user-friendly websites and web applications. I love to work on  both front-end and back-end development,
              . I am skilled  in technologies such as <span>HTML, CSS, SCSS ,JavaScript, ReactJS,  NodeJS, ExpressJS, MongoDB, Mongoose, RestAPI. </span>
              Currently  I am looking for opportunities to apply my skills and knowledge in real-world projects  </p>
            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND  ME</h4>
                <div className='button'>
                  <a href="https://www.linkedin.com/in/asheesh-mishra-6a2b061b8/" target="_blank" rel="noreferrer">
                    <button className='btn_shadow'>
                      <i className='fab fa-linkedin-in'></i>
                    </button>
                  </a>
                  <a href="https://twitter.com/asheesh2022" target="_blank" rel="noreferrer" >
                    <button className='btn_shadow'>
                      <i className="fa-brands fa-twitter"></i>
                    </button>
                  </a>
                  <a href="https://www.instagram.com/asheesh.mishra/" target="_blank" rel="noreferrer">
                    <button className='btn_shadow'>
                      <i className='fab fa-instagram'></i>
                    </button>
                  </a>
                  <a href="https://github.com/asheesh2022" target="_blank" rel="noreferrer">
                    <button className='btn_shadow'>
                      <i className='fab fa-github'></i>
                    </button>
                  </a>

                </div>
              </div>
             
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={asheesh} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home