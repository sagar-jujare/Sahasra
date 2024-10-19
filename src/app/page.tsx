"use client";
import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { pricingCards } from "@/constants/landing-page";
import clsx from "clsx";
import { ArrowRightCircleIcon, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { getMonthName } from "@/lib/utils";
import Features from "@/components/features";
import Reviews from "@/components/reviews";
import ScrollingBrandLogos from "@/components/company";
import Footer from "@/components/footer/footer";
import PricingPlans from "@/components/pricingplan/Pricingplan";
import { MotionDiv } from "../components/pricingplan/Pricingplan";
import ChatbotIntegrationSteps from "@/components/ChatbotIntegrationSteps/ChatbotIntegrationSteps";
import HandoverPage from "@/components/handover/handover";
// import { BlogPostsFetcher } from "@/components/BlogPostsFetcher";

export default function Home() {
  return (
    <main>
      <NavBar />
      {/* ... (rest of your JSX remains the same) ... */}

      {/* <section className="md:grid-cols-3 grid-cols-1 grid gap-5 container mt-8">
        <BlogPosts />
      </section> */}

      <PricingPlans />
      <ChatbotIntegrationSteps />

      <HandoverPage />
      <Reviews />
      <Footer />
    </main>
  );
}
