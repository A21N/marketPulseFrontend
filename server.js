const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const port = 3000; // Portul pe care va rula serverul

// Middleware pentru parsarea cererilor JSON
app.use(bodyParser.json());

// Endpoint pentru trimiterea emailului
app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Toate câmpurile sunt necesare.' });
  }

  // Configurarea transportului pentru Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'alindorobantu95@gmail.com', // Adresa ta de email Gmail
      pass: 'gkrhfvgujqrprdfu'           // App Password generat
    }
  });

  // Configurarea emailului
  const mailOptions = {
    from: email,                       // Adresa de email a utilizatorului
    to: 'alindorobantu95@gmail.com',   // Adresa ta de email
    subject: `Mesaj nou de la ${name}: ${subject}`,
    text: `Nume: ${name}\nEmail: ${email}\nSubiect: ${subject}\nMesaj: ${message}`
  };

  // Trimiterea emailului
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Eroare la trimiterea emailului:', error);
      res.status(500).json({ message: 'Trimiterea emailului a eșuat. Încearcă din nou mai târziu.' });
    } else {
      console.log('Email trimis:', info.response);
      res.status(200).json({ message: 'Email trimis cu succes!' });
    }
  });
});

// Servește fișierele statice din aplicația React build
app.use(express.static(path.join(__dirname, 'client/build')));

// Toate cererile care nu sunt capturate de API vor încărca index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Pornirea serverului
app.listen(port, () => {
  console.log(`Serverul rulează la http://localhost:${port}`);
});
