import React, { useRef } from "react";
import "./Footer.css";
import emailjs from "emailjs-com";

const Footer = () => {
  function refreshPage() {
    window.location.reload(false);
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_88ziwsr",
        "template_5ty8935",
        form.current,
        "MXZpCdpJz8PVU2j9_"
      )
      .then(
        (result) => {
          console.log("Result:" + result);
          alert("Successfully sent the email!");
          refreshPage();
        },
        (error) => {
          console.log("Error:" + error);
        }
      );
  };
  return (
    <>
      <footer className="footer-all-container">
        <div className="about-left">
          <div className="about-left-text">
            <h1>About Us!</h1>
            <p>
              We are Binus Bandung University second-year Computer Science
              students
              <span style={{ color: "wheat" }}> Dimas Dani Zaini</span>,
              <span style={{ color: "wheat" }}> M Sinan Abdul Syakur</span>, and
              <span style={{ color: "wheat" }}> Muhammad Feiza Zharfan Priyatnadi</span>
              . Our project's goals are to give users air pollution data for
              Indonesia and to assist them in calculating their carbon footprint
              using four essential parameters. You may better understand your
              environmental effects and make wise decisions for a cleaner,
              greener future with the help of our user-friendly tool. Stay
              updated on the air quality in your area and help us in our effort
              to make Indonesia environmentally conscious.
            </p>
          </div>
        </div>
        <div className="about-mid"></div>
        <div className="about-right">
          <div className="contacts-container">
            <div className="right-container">
              <form ref={form} onSubmit={sendEmail}>
                <div className="name-container">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="nameTxt"
                    placeholder="Your name"
                  />
                </div>
                <div className="from-container">
                  <label htmlFor="from">From</label>
                  <input
                    type="email"
                    pattern=".+@gmail\.com"
                    name="from"
                    id="fromTxt"
                    placeholder="Your gmail"
                  />
                </div>
                <div className="message-container">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="What's on your mind"
                    rows="8"
                    cols="50"
                    required
                  ></textarea>
                </div>
                <div className="submit-container">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
