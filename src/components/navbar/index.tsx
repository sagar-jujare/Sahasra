"use client";
import Image from "next/image";
import * as React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { X } from "lucide-react";
import ContactUsModal from "../contactus/contactus"; // Import the new ContactUsModal component
import TermsAndConditions from "../pages/termsconditions";

interface PricingPlan {
  name: string;
  price: number;
  features: string[];
  isHighlighted?: boolean;
}

const PricingCard: React.FC<PricingPlan> = ({
  name,
  price,
  features,
  isHighlighted,
}) => (
  <div
    className={`rounded-lg shadow-md p-6 flex flex-col relative ${
      isHighlighted ? "bg-indigo-50 border-2 border-indigo-500" : "bg-white"
    }`}
  >
    {isHighlighted && (
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold">
        Best Value
      </div>
    )}
    <h3 className="text-xl font-bold mb-4">{name}</h3>
    <p className="text-3xl font-bold mb-4">
      ₹{price}
      <span className="text-sm font-normal">/month</span>
    </p>
    <ul className="mb-6">
      {features.map((feature, index) => (
        <li key={index} className="mb-2">
          ✓ {feature}
        </li>
      ))}
    </ul>
    <Button
      className={`mt-auto ${
        isHighlighted ? "bg-indigo-600 hover:bg-indigo-700" : ""
      }`}
    >
      Choose Plan
    </Button>
  </div>
);

const PricingPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const plans: PricingPlan[] = [
    {
      name: "Standard",
      price: 0,
      features: [
        "1 Domain",
        "1 chatbot",
        "10 email credits",
        "10 messages/month",
        "Basic support",
        "Standard response time",
      ],
    },
    {
      name: "Plus",
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
    },
    {
      name: "Ultimate",
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
      isHighlighted: true,
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Pricing Plans</h2>
          <Button variant="ghost" onClick={onClose}>
            <X />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TermsAndConditionsPopup: React.FC<{ onClose: () => void }> = ({
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Terms and Conditions</h2>
          <Button variant="ghost" onClick={onClose}>
            <X />
          </Button>
        </div>
        <TermsAndConditions />
      </div>
    </div>
  );
};

function NavBar() {
  const [showPricing, setShowPricing] = React.useState(false);
  const [showTerms, setShowTerms] = React.useState(false);
  const [showContact, setShowContact] = React.useState(false);

  return (
    <>
      <div className="flex gap-5 justify-between items-center px-7 py-1 font-bold border-b border-solid border-zinc-100 leading-[154.5%] max-md:flex-wrap max-md:px-5">
        <div className="flex gap-1.5 justify-center self-stretch my-auto text-2xl tracking-tighter text-neutral-700">
          <Image
            src="/images/sahasraai.png"
            alt="LOGO"
            sizes="100vw"
            style={{
              width: "170px",
              height: "auto",
            }}
            width={0}
            height={0}
          />
        </div>
        <ul className="gap-5 justify-between self-stretch my-auto text-sm leading-5 text-neutral-700 max-md:flex-wrap max-md:max-w-full font-normal hidden md:flex">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer" onClick={() => setShowPricing(true)}>
            Pricing
          </li>
          <li className="cursor-pointer" onClick={() => setShowTerms(true)}>
            Terms & Conditions
          </li>
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer" onClick={() => setShowContact(true)}>
            Contact us
          </li>
        </ul>
        <div className="flex gap-2">
          <Link
            href="/dashboard"
            className="bg-indigo-600 px-4 py-2 rounded-sm text-white"
          >
            Free Trial
          </Link>
          <Link
            href="/dashboard"
            className="bg-white px-4 py-2 rounded-sm text-black border-2 border-indigo-600"
          >
            Dashboard
          </Link>
        </div>
      </div>
      {showPricing && <PricingPopup onClose={() => setShowPricing(false)} />}
      {showTerms && (
        <TermsAndConditionsPopup onClose={() => setShowTerms(false)} />
      )}
      {showContact && <ContactUsModal onClose={() => setShowContact(false)} />}
    </>
  );
}

export default NavBar;
