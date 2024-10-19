"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

const WhatsAppComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-green-600 text-white p-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="inline-block mb-8"
        >
          <MessageSquare size={80} />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          WhatsApp Integration
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-xl md:text-2xl mb-8"
        >
          Coming Soon
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-lg"
        >
          We&apos;re working hard to bring you seamless WhatsApp integration.
          Stay tuned!
        </motion.div>
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-12"
      >
        <div className="w-24 h-24 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white bg-opacity-40 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-white"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WhatsAppComingSoon;
