import React, { useState } from "react"

const PopUpBox = (props) => {
 const [modal, setModal] = useState(false)

 const toggleModal = () => {
   setModal(!modal)
 }

 if (modal) {
   document.body.classList.add("active-modal")
 } else {
   document.body.classList.remove("active-modal")
 }
 return (
   <>
     <button onClick={toggleModal} className='btn-modal'>
       Open
     </button>

     {modal && (
       <div className='modal'>
         <div onClick={toggleModal} className='overlay'></div>
         <div className='modal-content'>
           <h2>Hello Modal</h2>
           <p> Netflix clone is made from frontend technologies like react css and in backend node js expressjs is used
Firebase is used for using data of user like email and password redux is used....
</p>
           <button className='close-modal' onClick={toggleModal}>
             CLOSE
           </button>
         </div>
       </div>
     )}
   </>
 )
}

export default PopUpBox