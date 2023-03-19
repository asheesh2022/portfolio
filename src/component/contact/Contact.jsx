import React, { useState } from "react"
// import contact1 from "./contact1.png"
import "./contact.css"

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",})

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()
    alert(
      `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
    )
  }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact  Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  {/* <img src={contact1} alt='' /> */}
                </div>
                <div className='details'>
                  <h1>Asheesh Mishra</h1>
                  <p>Full Stack Developer</p>
                  <p>Currently looking for opportunities. </p> <br />
                  <p>Phone : 7340452648</p>
                <a href="mailto:masheesh2000@gmail.com" target = "_blank"  rel = "noreferrer" > 
                  <p>Email : masheesh2000@gmail.com</p> <br />
                  </a> 
                  <span>FIND ME</span>
                  <div className='button f_flex'>
                    <a href="https://www.linkedin.com/in/asheesh-mishra-6a2b061b8/" target="_blank"  rel = "noreferrer">
                  <button className='btn_shadow'>
                    <i className='fab fa-linkedin-in'></i>
                  </button>
                    </a>
                    <a href="https://twitter.com/asheesh2022" target="_blank"  rel = "noreferrer" >
                  <button className='btn_shadow'>
                    <i className="fa-brands fa-twitter"></i>
                  </button>
                    </a>
                    <a href="https://www.instagram.com/asheesh.mishra/" target="_blank"  rel = "noreferrer">
                  <button className='btn_shadow'>
                    <i className='fab fa-instagram'></i>
                  </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact