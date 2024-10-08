const express = require('express')
const nodemailer = require('nodemailer')
const dotenv = require("dotenv")
const app = express()
dotenv.config()

app.use(express.json())


app.get('/', (req,res) => {
    res.send('hello')
})

app.post('/send', async (req, res) => {


    const { name, email, subject, message } = req.body;
    console.log(req.body);

    
const transporter = await nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const mailOptions = await {
    from:email,
    to: process.env.EMAIL_USER,
    subject:subject,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
};

transporter.sendMail (mailOptions, (error, info) => {
    if (error) {
        console.log(error);
        return res.status(500).send('Error sending message');
    }
    res.status(200).send('Message sent successfully');
});
    
});



const PORT = 4000
app.listen(PORT,console.log(`server is running`));