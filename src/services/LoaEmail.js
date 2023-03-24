const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/api/sendLetterOfAppreciation", async (req, res) => {
  try {
    const { email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "poojjasancheti123@gmail.com", // replace with your email
        pass: "Achieve2inspire", // replace with your password
      },
    });

    const mailOptions = {
      from: "poojjasancheti123@gmail.com", // replace with your email
      to: email,
      subject: "Letter of Appreciation",
      text: message,
    };

    await transporter.sendMail(mailOptions);

    res.send("Letter of Appreciation sent!");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error sending Letter of Appreciation.");
  }
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000.");
});
