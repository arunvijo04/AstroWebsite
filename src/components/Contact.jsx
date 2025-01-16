import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(false);
    setErrorMessage("");

    const serviceID = "service_z4opicg";
    const templateID = "template_zurkrvh";
    const publicKey = "-1zpENpPnvmPD8SJF";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setFormSubmitted(true);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setErrorMessage("Failed to send the message. Please try again.");
      });
  };

  return (
    <div
      id="contact"
      className="w-full min-h-screen bg-gradient-to-b from-[#eae4e9] to-[#d5c6e0] flex flex-col md:flex-row justify-center items-center px-7 md:px-60 lg:px-48 py-18"
    >
      {/* Left Section - Text */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-[#2d2d2d] text-[28px] md:text-[40px] lg:text-[52px] font-normal font-castoro">
          Reach Out to the <span className="text-[#192a51]">STARS!</span>
        </h1>
        <p className="mt-4 md:mt-6 max-w-xl mx-auto md:mx-0 text-[#2d2d2d] text-[16px] md:text-[20px] font-normal font-epilogue leading-6 md:leading-6">
          Reach out to us across the galaxy! <br />
          <br />
          Share your thoughts, ask a question, or simply say hello. <br />
          Send us a message and let's explore the universe together!
        </p>

        {/* Icons Section */}
        <div className="mt-6 flex justify-center md:justify-start space-x-6">
          <a
            href="mailto:astronomy@rajagiritech.edu.in"
            className="text-[#2d2d2d] hover:text-[#5e548e]"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/rset-astronomy-club/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2d2d2d] hover:text-[#5e548e]"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/rset.astronomy.club?igsh=OGE2ZWl5dXNhbHh4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2d2d2d] hover:text-[#5e548e]"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Contact Information */}
        <div className="mt-4 text-[#2d2d2d] text-[14px] md:text-[16px]">
          <p>CLUB EMAIL: astronomy@rajagiritech.edu.in</p>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="flex-1 flex flex-col items-center md:items-start mt-15 md:mt-10 md:ml-40">
        <form onSubmit={handleSubmit} className="w-full max-w-[364px]">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full h-12 bg-white border border-[#d9d9d9] rounded-lg px-4 text-[#5e548e] font-syne text-base mb-7 md:mb-8"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-12 bg-white border border-[#d9d9d9] rounded-lg px-4 text-[#5e548e] font-syne text-base mb-7 md:mb-8"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full h-24 bg-white border border-[#d9d9d9] rounded-lg px-4 py-2 text-[#5e548e] font-syne text-base mb-7 md:mb-8"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full h-11 bg-gradient-to-r from-[#d5c6e0] to-[#9f86c0] text-white rounded-[20px] shadow-md font-syne text-[18px] md:text-[22px] font-semibold mt-4"
          >
            Submit
          </button>
        </form>
        {formSubmitted && (
          <p className="mt-4 text-green-600 font-syne text-[16px] md:text-[18px]">
            Form Submitted Successfully!
          </p>
        )}
        {errorMessage && (
          <p className="mt-4 text-red-600 font-syne text-[16px] md:text-[18px]">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
