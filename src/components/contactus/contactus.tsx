import React from "react";
import { X, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ContactUsModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-indigo-600">Contact Us</h2>
          <Button variant="ghost" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {/* <div className="flex items-center space-x-4">
              <Phone className="text-indigo-500 h-6 w-6" />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div> */}

            <div className="flex items-center space-x-4">
              <Mail className="text-indigo-500 h-6 w-6" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600">support@sahasraai.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin className="text-indigo-500 h-6 w-6" />
              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="text-gray-600">123 AI Street, Tech City, 12345</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold text-xl text-indigo-600">
              Quick Support
            </h3>
            <Button
              className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center space-x-2"
              onClick={() =>
                (window.location.href = "https://wa.me/8277031751")
              }
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp Logo"
                width={20}
                height={20}
                className="h-5 w-5"
              />

              <span>WhatsApp Support</span>
            </Button>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-2">Business Hours</h4>
              <p className="text-gray-600">Monday - Friday: 9AM - 4PM</p>
              <p className="text-gray-600">Saturday: 10AM - 1PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Were here to help! Feel free to reach out through any of the
            channels above.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsModal;
