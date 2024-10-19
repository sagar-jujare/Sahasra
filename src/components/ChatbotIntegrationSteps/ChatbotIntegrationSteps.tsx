"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  CreditCard,
  Code,
  MessageSquare,
  DollarSign,
  Lock,
  Zap,
  Users,
  Star,
  Settings,
  IndianRupee,
} from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface Step {
  title: string;
  description: string;
  mainIcon: React.ElementType;
  color: string;
  bgColor: string;
  image: string;
  additionalIcons: Array<{
    icon: React.ElementType;
    color: string;
  }>;
}

const steps: Step[] = [
  {
    title: "Select a Plan",
    description:
      "Choose a chatbot integration plan that aligns with your business needs and budget.",
    mainIcon: CreditCard,
    color: "text-blue-600",
    bgColor: "bg-red-50",
    image: "/api/placeholder/400/300",
    additionalIcons: [
      { icon: IndianRupee, color: "text-green-500" },
      { icon: Lock, color: "text-red-500" },
    ],
  },
  {
    title: "Implement the Code",
    description:
      "Seamlessly integrate our chatbot by adding the provided code snippet to your website.",
    mainIcon: Code,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    image: "/api/placeholder/400/300",
    additionalIcons: [
      { icon: Zap, color: "text-yellow-500" },
      { icon: Settings, color: "text-gray-500" },
    ],
  },
  {
    title: "Launch and Engage",
    description:
      "Your chatbot is now live, ready to enhance user experience and boost engagement.",
    mainIcon: MessageSquare,
    color: "text-green-600",
    bgColor: "bg-green-50",
    image: "/api/placeholder/400/300",
    additionalIcons: [
      { icon: Users, color: "text-indigo-500" },
      { icon: Star, color: "text-yellow-500" },
    ],
  },
];

interface BackgroundCircleProps {
  size: number;
  color: string;
  initialX: number;
  initialY: number;
}

const BackgroundCircle: React.FC<BackgroundCircleProps> = ({
  size,
  color,
  initialX,
  initialY,
}) => (
  <motion.div
    className={`absolute rounded-full ${color} opacity-10`}
    style={{
      width: size,
      height: size,
      x: initialX,
      y: initialY,
    }}
    animate={{
      x: [initialX, initialX + 50, initialX - 50, initialX],
      y: [initialY, initialY - 50, initialY + 50, initialY],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
);

const ChatbotIntegrationSteps: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center p-8 overflow-hidden bg-gray-50 ">
      <BackgroundCircle
        size={300}
        color="bg-blue-200"
        initialX={-150}
        initialY={-150}
      />
      <BackgroundCircle
        size={200}
        color="bg-indigo-200"
        initialX={400}
        initialY={300}
      />
      <BackgroundCircle
        size={250}
        color="bg-green-200"
        initialX={-100}
        initialY={400}
      />

      <h1 className="text-4xl font-bold mb-12 text-gray-800 relative z-10">
        Integrate Your Chatbot in 3 Simple Steps
      </h1>
      <div className="relative w-full max-w-4xl z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: index === currentStep ? 1.05 : 1,
              }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card
                className={`overflow-hidden ${step.bgColor} border-none shadow-lg`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-2">
                    <div className={`p-2 rounded-full ${step.color} bg-white`}>
                      <step.mainIcon size={24} />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800">{`Step ${
                      index + 1
                    }: ${step.title}`}</h2>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative w-full h-40 mb-4">
                    <Image
                      src={step.image}
                      alt={step.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="flex justify-end space-x-2">
                    {step.additionalIcons.map((icon, iconIndex) => (
                      <div
                        key={iconIndex}
                        className={`p-2 rounded-full ${icon.color} bg-white`}
                      >
                        <icon.icon size={16} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatbotIntegrationSteps;
