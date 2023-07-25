import React, { useState } from 'react'
import './ContactPage.css'

const ContactPage = () => {
  const [formUserData, setFormUserData] = useState({
    nombre:'',
    email:'',
    asunto:'',
    mensaje:''
  })

  const [showAlert, setShowAlert] = useState(false)
  const handleRegisterUser = (e) => {
    e.preventDefault()
    if (formUserData.nombre === '' || formUserData.email === '' || formUserData.asunto === '' || formUserData.mensaje === '') {
      alert('Por favor, complete todos los campos del formulario.');
      return;
    }  
    setShowAlert(true)
    setFormUserData({
      nombre:'',
      email:'',
      asunto:'',
      mensaje:''
    })
    setTimeout(() => {
      setShowAlert(false)
    }, 5000)
  }
  const handleChangeRegisterUser = (e) =>{
    console.log(e.target.name)
    setFormUserData({...formUserData, [e.target.name] : e.target.value})
  }
  return (
    <div>
      <form onSubmit={handleRegisterUser} className='formularioUsuario'>
        <h2>Contact</h2>
        <div>
          <label htmlFor="nombre">Full Name*</label>
          <input className='inputNombre-Email-Asunto' type="text"  placeholder='Santiago Falbi' name='nombre' id='nombre' onChange={handleChangeRegisterUser} value={formUserData.nombre} />
        </div>
        <div>
          <label htmlFor="email">Email*</label>
          <input className='inputNombre-Email-Asunto' type="email" placeholder='Santiago Falbi@gmail.com' name='email' id='email' onChange={handleChangeRegisterUser} value={formUserData.email}/>
        </div>
        <div>
          <label htmlFor="asunto">Subject*</label>
          <input className='inputNombre-Email-Asunto' type="text"  placeholder='Fender guitar price' name='asunto' id='asunto' onChange={handleChangeRegisterUser} value={formUserData.asunto} />
        </div>
        <div>
          <label htmlFor="mensaje">Message*</label>
          <input className='inputMensaje' type="text" name='mensaje' id='mensaje' onChange={handleChangeRegisterUser} value={formUserData.mensaje} />
        </div>
        <div>
          <button className='btn-Submit' type='submit'>SEND</button>
          {
            showAlert && <div className="alert-fade">Form submitted!</div>
          }
        </div>
      </form>
      
    </div>
  )
}

export default ContactPage