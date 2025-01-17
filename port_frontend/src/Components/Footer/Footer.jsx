import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  RiPhoneLine
} from "react-icons/ri";
import axios from "axios";
import { toast } from "react-hot-toast";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start spinner

    try {
      await axios.post("https://portfolio-server-nrm2.onrender.com/send-email", formData);
      toast.success("Query sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send query. Please try again.");
    } finally {
      setLoading(false); // Stop spinner
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-8" id="footer">
      <div className="max-w-6xl mx-auto px-4">
        <div className="md:flex md:justify-around">
          {/* Query Form Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Have a Query?</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                required
                className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <div className="loader w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>

          {/* Social Media Links Section */}
          <div className="flex flex-col items-start justify-center">
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="tel:+916392670425" target="_blank" rel="noopener noreferrer">
                <RiPhoneLine className="text-2xl hover:text-blue-500 transition duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/afzal-mia-606aa0293/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-blue-600 transition duration-300" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-2xl hover:text-blue-500 transition duration-300" />
              </a>
              <a href="https://www.instagram.com/mohdafjal7534/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-pink-500 transition duration-300" />
              </a>

            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-gray-500">
          &copy; 2025 Afzal-Mia. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
