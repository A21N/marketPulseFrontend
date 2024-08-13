const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 5000; // Portul pe care va rula serverul complet

// Middleware pentru parsarea cererilor JSON și permisiuni CORS
app.use(bodyParser.json());
app.use(cors());

// Servirea fișierelor statice din React
app.use(express.static(path.join(__dirname, 'client/build')));

// Endpoint pentru trimiterea emailului
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Toate câmpurile sunt necesare.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'alindorobantu95@gmail.com', // Adresa ta de email Gmail
      pass: 'gkrhfvgujqrprdfu'           // Parola aplicației generată
    }
  });

  const mailOptions = {
    from: email,
    to: 'alindorobantu95@gmail.com',
    subject: `Mesaj nou de la ${name}`,
    text: `Nume: ${name}\nEmail: ${email}\nMesaj: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Eroare la trimiterea emailului:', error);
      return res.status(500).json({ message: 'Trimiterea emailului a eșuat. Încearcă din nou mai târziu.' });
    } else {
      console.log('Email trimis:', info.response);
      return res.status(200).json({ message: 'Email trimis cu succes!' });
    }
  });
});

// Prinde toate celelalte rute și trimite `index.html`
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// Pornirea serverului
app.listen(port, () => {
  console.log(`Serverul Express rulează la http://localhost:${port}`);
});
