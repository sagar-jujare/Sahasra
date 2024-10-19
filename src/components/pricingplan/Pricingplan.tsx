"use client";
import React from "react";
import { motion } from "framer-motion";

interface ColorScheme {
  bg: string;
  text: string;
  subtext: string;
  button: string;
  shadow: string;
}

interface PlanProps {
  title: string;
  price: number;
  features: string[];
  isPopular: boolean;
  color: ColorScheme;
}

const PricingPlan: React.FC<PlanProps> = ({
  title,
  price,
  features,
  isPopular,
  color,
}) => (
  <motion.div
    className={`flex flex-col p-6 sm:p-8 rounded-2xl ${color.shadow} ${
      isPopular ? "border-2 border-green-500" : ""
    } h-full`}
    style={{ backgroundColor: color.bg }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    whileHover={{
      scale: 1.03,
      boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.2 },
    }}
  >
    {isPopular && (
      <motion.span
        className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold tracking-wide uppercase mb-6 self-start"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        Most Popular
      </motion.span>
    )}
    <h3 className={`mb-4 text-xl sm:text-2xl font-bold ${color.text}`}>
      {title}
    </h3>
    <motion.div
      className="flex items-baseline mb-6"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.3 }}
    >
      <span className={`text-4xl sm:text-5xl font-extrabold ${color.text}`}>
        ₹{price}
      </span>
      <span className={`ml-1 ${color.subtext}`}>/month</span>
    </motion.div>
    <ul role="list" className="mb-8 space-y-4 text-left flex-grow">
      {features.map((feature, index) => (
        <motion.li
          key={index}
          className={`flex items-start space-x-3 ${color.text}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
        >
          <svg
            className="flex-shrink-0 w-5 h-5 text-green-500 mt-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>{feature}</span>
        </motion.li>
      ))}
    </ul>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`mt-auto w-full px-4 py-3 text-sm font-semibold rounded-lg ${color.button} transition-colors duration-200`}
    >
      Choose plan
    </motion.button>
  </motion.div>
);

const PricingPlans: React.FC = () => {
  const plans: PlanProps[] = [
    {
      title: "Starter",
      price: 0,
      features: [
        "1 Domain",
        "1 chatbot",
        "10 email credits",
        "10 messages/month",
        "Basic support",
        "Standard response time",
      ],
      isPopular: false,
      color: {
        bg: "#ffffff",
        text: "text-gray-900",
        subtext: "text-gray-600",
        button: "bg-indigo-600 text-white hover:bg-indigo-700",
        shadow: "shadow-lg",
      },
    },
    {
      title: "Ultimate",
      price: 499,
      features: [
        "2 Domains",
        "1 chatbot",
        "300 email credits",
        "1000 email contacts",
        "Unlimited Messages",
        "Priority support",
        "Standard response time",
      ],
      isPopular: true,
      color: {
        bg: "#ffffff",
        text: "text-gray-900",
        subtext: "text-gray-600",
        button: "bg-indigo-600 text-white hover:bg-indigo-700",
        shadow: "shadow-xl",
      },
    },
    {
      title: "Pro",
      price: 399,
      features: [
        "1 Domain",
        "1 chatbot",
        "100 email credits",
        "300 email contacts",
        "Unlimited Messages",
        "Priority support",
        "Standard response time",
      ],

      isPopular: false,
      color: {
        bg: "#ffffff",
        text: "text-gray-900",
        subtext: "text-gray-600",
        button: "bg-indigo-600 text-white hover:bg-indigo-700",
        shadow: "shadow-lg",
      },
    },
  ];

  return (
    <div className="py-16 px-4 w-full bg-gray-50">
      <motion.div
        className="max-w-7xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900">
          Choose Your Perfect Plan
        </h2>
        <p className="mb-5 font-light text-gray-600 sm:text-xl max-w-2xl mx-auto">
          Select the ideal chatbot solution for your business needs and scale
          your customer interactions effortlessly
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <PricingPlan key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
export const MotionDiv = motion.div;
