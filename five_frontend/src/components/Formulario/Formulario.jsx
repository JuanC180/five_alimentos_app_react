import React, { useState } from 'react';
import axios from 'axios';
import '../Formulario/Formulario.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    comentario: ''
  });

  const [errors, setErrors]= useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };
   
  const formatNombre = (str) =>{
  const words = str.trim().split(/\s+/);

  const capitalizeWords = words.map(word => word.charAt(0).toUpperCase()+word.slice(1).toLowerCase());
    console.log('aqui esta')
  return capitalizeWords.join(' ');
};

  const validateForm = () => {
    let formErrors = {};
    if(!/^\d{10}$/.test(formData.telefono)){
      formErrors.telefono = 'El teléfono debe tener 10 dígitos.';
    }
    const formattedNombre = formatNombre(formData.nombre);
    if(!formattedNombre){
      formErrors.nombre='Este campo no puede ir vacío';
    } else if(!/^[a-zA-Z\s]+$/.test(formattedNombre)){
      formErrors.nombre = 'El nombre solo debe contener letras y espacios'
    }
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if(Object.keys(formErrors).length===0){
      const formattedData= {
        ...formData,
        nombre: formatNombre(formData.nombre),
        comentario: formData.comentario || 'No Aplica'
      }
      console.log(formattedData,'esto es formattedData')
      
      axios.post('http://localhost:3000/api/v1/contact', formattedData)
      .then(response => {
        alert('Correo enviado exitosamente');
        
      })
      .catch(error => {
        alert('Error al enviar el correo');
      });
    } else{
      setErrors(formErrors);
    }
   

   
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='div-c'>
        <input required 
        type="text"
        className='input-c'
        id='nombre'
        minLength='3'
        maxLength='50'
        placeholder='Nombres'
        value={formData.nombre}
        onChange={handleChange} />
         {errors.nombre && <span className="error"><br />{errors.nombre}</span>}
      </div>
      <div className='div-c'>
        <input required 
        type="email"
        className='input-c'
        id='correo'
        minLength='5'
        maxLength='80'
        placeholder='Correo'
        value={formData.correo}
        onChange={handleChange} />
      </div>
      <div className='div-c'>
        <input required 
        type="text"
        className='input-c'
        id='telefono'
        minLength='10'
        maxLength='10'
        pattern="\d*"
        placeholder='Teléfono'
        value={formData.telefono}
        onChange={handleChange} />
        {errors.telefono && <span className="error">{errors.telefono}</span>}
      </div>
      <div className='div-c'>
        <textarea 
        className='text-container'
        id='comentario'
        rows='4'
        placeholder='Comentario'
        value={formData.comentario}
        onChange={handleChange} />
      </div>
     <div className='container-bt'>
      <button className='btn btn-primary btn-enviar btn-margin' type='submit'>Enviar</button>
     </div>
    </form>
  );
};

export default ContactForm;
