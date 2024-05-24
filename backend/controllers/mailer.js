import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail', 
  auth: {
    user: 'notificacionesfive@gmail.com', 
    pass: 'holk hivj jmvs nozf'       
  }
});
const htmlTemplate = (nombre, correo, telefono, comentario) => `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px;">
    <h2 style="background-color: #77dd77; padding: 10px; border-radius: 10px 10px 0 0; text-align: center; color: #fff;">Nuevo mensaje de contacto</h2>
    <p style="text-align: center;"><strong>Nombre:</strong> ${nombre}</p>
    <p style="text-align: center;"><strong>Correo:</strong> ${correo}</p>
    <p style="text-align: center;"><strong>Teléfono:</strong> ${telefono}</p>
    <p style="text-align: center;"><strong>Comentario:</strong></p>
    <p style="white-space: pre-wrap; text-align: center;">${comentario}</p>
    <p style="text-align: center; font-weight: bold; margin-top: 20px;font-style:italic;">five alimentos empacados</p>
  </div>
`
export const sendContactEmail = (nombre, correo, telefono, comentario) => {
  const htmlContent = htmlTemplate(nombre,correo,telefono,comentario);
  console.log('HTML generado:', htmlContent);
  const mailOptions = {
    from: 'notificacionesfive@gmail.com', 
    to: 'velasquito23@gmail.com',
    subject: 'Nuevo mensaje de contacto ',
    html: htmlContent
  };

  return transporter.sendMail(mailOptions);
};
