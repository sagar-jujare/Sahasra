import React from "react";
import Image from "next/image";
import { MessageSquare } from "lucide-react";

const HandoverPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        Handover to live agents seamlessly
      </h1>
      <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
        Combine AI efficiency with human expertise. Let AI resolve most queries
        automatically so your team can focus on top-tier clients.
      </p>
      <div className="flex justify-center mb-8">
        <button className="bg-black text-white px-4 py-2 rounded-md flex items-center">
          <MessageSquare className="mr-2" size={20} />
          Add live agents to ChatBot
        </button>
      </div>
      <div className="w-full aspect-[16/9] bg-orange-100 rounded-lg overflow-hidden relative">
        <Image
          src="/images/handover.png"
          alt="Handover to live agents demonstration"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default HandoverPage;
