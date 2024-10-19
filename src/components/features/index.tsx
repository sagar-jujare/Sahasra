"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const tabs = [
  {
    id: "scan",
    label: "Dashboard",
    icon: "💻",
    content: "Get the overall information about the sales.",
    image: "/images/feature1.png",
  },
  {
    id: "tune",
    label: "Conversation",
    icon: "📝",
    content: "Can engange with the customers in different formats.",
    image: "/images/conversation.png",
  },
  {
    id: "resolve",
    label: "Email Marketing",
    icon: "📅",
    content: "Send bulk and promoting ads at once.",
    image: "/images/feature-3.png",
  },
  {
    id: "analyze",
    label: "Analyze",
    icon: "📊",
    content: "Analyze data with powerful visualization and reporting tools.",
    image: "/images/feature1.png",
  },
];

const BeautifulTabMenu: React.FC = () => {
  const [activeTab, setActiveTab] = useState("scan");

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <h2 className="text-4xl text-center mb-6">Features</h2>
      <div className="bg-gray-100 p-1 rounded-full flex mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-4 py-2 rounded-full transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-white text-blue-600 shadow-lg"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-6">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h2 className="text-3xl font-bold mb-4 text-blue-600">
                  {tab.label}
                </h2>
                <p className="text-gray-700 mb-6">{tab.content}</p>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={tab.image}
                    alt={`${tab.label} feature`}
                    width={1200}
                    height={600}
                    layout="responsive"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </motion.div>
            )
        )}
      </div>
    </div>
  );
};

export default BeautifulTabMenu;
