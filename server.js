const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'YOUR_EMAIL@gmail.com', // Replace with your email address
    pass: 'YOUR_EMAIL_PASSWORD', // Replace with your email password (or use environment variables)
  },
});

app.post('/submit-form', (req, res) => {
  const { address, inspectionDate, inspectorName, notes } = req.body;

  const mailOptions = {
    from: 'YOUR_EMAIL@gmail.com', // Replace with your email address
    to: 'RECIPIENT_EMAIL@example.com', // Replace with recipient's email address
    subject: 'New Property Inspection Form Submission',
    text: `Address: ${address}\nInspection Date: ${inspectionDate}\nInspector Name: ${inspectorName}\nNotes: ${notes}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error: Failed to send email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

const PORT = 3001; // Port on which the server will run
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
