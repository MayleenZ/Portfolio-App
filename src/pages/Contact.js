import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs
      .sendForm(
        "service_tgpt2n6",
        "template_4ui55et",
        form.current,
        "S-641uHdJ8A7ZTMwj"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset()
        },
        (error) => {
          console.error(error.text);
        }
      );
  };
  return (
    <>
      <h1 className="contact-title">Email Me</h1>
      <p className="contact-content">I am currently open to junior software engineering positions.</p>

      <form id = "form-div" ref={form} onSubmit={sendEmail}>
        <label className="label">Your Name</label>
        <input className="input" type="text" name="user_name" />
        <label className="label">Your Email</label>
        <input className="input" type="email" name="user_email" />
        <label className="label">Message</label>
        <textarea className="message-area" name="message" />
        <input id= "btn-s" type="submit" value="Send" />
      </form>
    </>
  );
}

export default Contact;
