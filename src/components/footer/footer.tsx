"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Linkedin, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle newsletter signup logic here
  //   console.log("Signed up with:", email);
  //   setEmail("");
  // };

  return (
    <footer className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-indigo-800 mb-4">ChatBot</h3>
            <p className="text-gray-700 mb-4">
              Empowering conversations with AI, transforming the way we interact
              and learn.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-indigo-600 hover:text-pink-500 transition-colors duration-300"
              >
                <MessageCircle size={24} />
              </a>
              <a
                href="#"
                className="text-indigo-600 hover:text-pink-500 transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
              <a
                href="#"
                className="text-indigo-600 hover:text-pink-500 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold text-indigo-800 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-pink-500 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-pink-500 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-pink-500 transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-pink-500 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-xl font-semibold text-indigo-800 mb-4">
              About Us
            </h4>
            <p className="text-gray-700">
              We are passionate about creating intelligent chatbot solutions
              that enhance human-computer interactions. Our AI-powered chatbots
              are designed to provide seamless, engaging, and helpful
              conversations across various industries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-xl font-semibold text-indigo-800 mb-4">
              Newsletter
            </h4>
            <p className="text-gray-700 mb-4">
              Stay updated with our latest AI advancements and chatbot features.
            </p>
            {/* <form  className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-pink-500 transition-colors duration-300 flex items-center"
              >
                Subscribe
                <ArrowRight size={16} className="ml-2" />
              </button>
            </form> */}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-indigo-200 text-center"
        >
          <p className="text-gray-600">
            © {currentYear} ChatBot. All rights reserved. |
            <a
              href="#"
              className="text-indigo-600 hover:text-pink-500 ml-2 transition-colors duration-300"
            >
              Privacy Policy
            </a>{" "}
            |
            <a
              href="#"
              className="text-indigo-600 hover:text-pink-500 ml-2 transition-colors duration-300"
            >
              Terms of Service
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
