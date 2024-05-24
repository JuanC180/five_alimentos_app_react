import { sendContactEmail } from "./mailer.js";

export const handleContactForm = async (req, res) => {
    const { nombre, correo, telefono, comentario } = req.body;
  
    try {
      await sendContactEmail(nombre, correo, telefono, comentario);
      res.status(200).json({ message: 'Correo enviado exitosamente' });
    } catch (error) {
        console.error('Error al enviar el correo:',error)
      res.status(500).json({ message: 'Error al enviar el correo', error });
    }
  };

