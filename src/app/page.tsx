import { onGetBlogPosts } from "@/actions/landing";
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

export default async function Home() {
  const posts:
    | {
        id: string;
        title: string;
        image: string;
        content: string;
        createdAt: Date;
      }[]
    | undefined = await onGetBlogPosts();
  // console.log(posts);
  return (
    <main>
      <NavBar />
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <main className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Help, convert, and sell
              <br />
              with a data-driven AI chatbot
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              ChatBot instantly helps your customers using AI-generated
              <br />
              responses. Get 24/7 support and ultra-high satisfaction rates.
            </p>
          </main>

          <div className="relative w-full max-w-4xl mt-16">
            <div className="absolute inset-0 bg-indigo-200 rounded-3xl transform -rotate-3"></div>
            <Image
              src="/images/Mockup.png"
              alt="Sahasra AI Mockup"
              className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-2xl"
              width={1600}
              height={1600}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-indigo-600 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">
                Respond to customer queries in milliseconds, 24/7.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-indigo-600 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">
                Bank-grade encryption keeps your data safe and sound.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-indigo-600 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Boost Conversions</h3>
              <p className="text-gray-600">
                Turn visitors into customers with personalized assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ScrollingBrandLogos />
      <Features />

      <section className="flex justify-center items-center flex-col gap-4 mt-28">
        <h2 className="text-4xl text-center">News Room</h2>
        <p className="text-muted-foreground text-center max-w-lg">
          Explore our insights on AI, technology, and optimizing your business.
        </p>
      </section>
      <section className="md:grid-cols-3 grid-cols-1 grid gap-5 container mt-8">
        {posts &&
          posts.map((post) => (
            <Link href={`/blogs/${post.id}`} key={post.id}>
              <Card className="flex flex-col gap-2 rounded-xl overflow-hidden h-full hover:bg-gray-100">
                <div className="relative w-full aspect-video">
                  <Image
                    src={`${process.env.CLOUDWAYS_UPLOADS_URL}${post.image}`}
                    alt="post featured image"
                    fill
                  />
                </div>
                <div className="py-5 px-10 flex flex-col gap-5">
                  <CardDescription>
                    {getMonthName(post.createdAt.getMonth())}{" "}
                    {post.createdAt.getDate()} {post.createdAt.getFullYear()}
                  </CardDescription>
                  <CardTitle>{post.title}</CardTitle>
                  {parse(post.content.slice(4, 100))}...
                </div>
              </Card>
            </Link>
          ))}
      </section>

      <PricingPlans />
      <ChatbotIntegrationSteps />

      <HandoverPage />
      <Reviews />
      <Footer />
    </main>
  );
}
