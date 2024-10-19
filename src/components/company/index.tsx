"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const ScrollingBrandLogos = () => {
  const logos = [
    { name: "Shopify", src: "/images/shopify.jpeg" },
    { name: "DeoDap", src: "/images/deodap.png" },
    { name: "SkillShare", src: "/images/skillshare.png" },
    { name: "Licious", src: "/images/licious.jpg" },
    { name: "Stanza", src: "/images/stanza.png" },
    { name: "Grand", src: "/images/grand.png" },
    { name: "Express", src: "/images/express.png" },
    { name: "Borcelle", src: "/images/borcelle.png" },
    { name: "HTC", src: "/images/lootboy.png" },
    { name: "SmileShop", src: "/images/smileshop.png" },
    { name: "Moody's", src: "/images/bring.jpg" },
    { name: "GM", src: "/images/react.jpg" },
    { name: "Bitdefender", src: "/images/social.jpg" },
    { name: "ACT", src: "/images/pearson.jpg" },
    { name: "BASF", src: "/images/avaya.jpg" },
    { name: "HealthEquity", src: "/images/smash.jpg" },
  ];

  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 mb-8">
          Empowering <span className="font-bold">thousands</span> of companies.{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Join them ›
          </a>
        </p>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 items-center">
          {logos.map((logo, index) => (
            <Card key={index} className="border-none shadow-none">
              <CardContent className="flex items-center justify-center p-2">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={100}
                  height={50}
                  style={{ objectFit: "contain" }}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingBrandLogos;
