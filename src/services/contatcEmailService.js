import * as functions from "firebase-functions";
import nodemailer from "nodemailer";

// Configuración del transporte de Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tu_correo@gmail.com",
    pass: "tu_contraseña",
  },
});

exports.sendEmail = functions.https.onRequest((req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send("Método no permitido");
  }

  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "correo_del_propietario@gmail.com",
    subject: `Nuevo mensaje de ${name}`,
    text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error enviando correo:", error);
      return res.status(500).send("Error enviando correo");
    }
    return res.status(200).send("Correo enviado con éxito");
  });
});
