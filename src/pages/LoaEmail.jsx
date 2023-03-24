import React, { useState } from "react";
import axios from "axios";

const LetterOfAppreciation = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/sendLetterOfAppreciation", {
        email,
        message,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" onChange={handleEmailChange} />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" onChange={handleMessageChange} />

      <button type="submit" onClick={handleSubmit}>Send Letter of Appreciation</button>
    </form>
  );
};

export default LetterOfAppreciation;
