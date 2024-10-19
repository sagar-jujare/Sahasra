import { onGetSubscriptionPlan } from "@/actions/settings";
import React from "react";
import Section from "../section-label";
import { Card, CardContent, CardDescription } from "../ui/card";
import { Check, CheckCircle2, Plus } from "lucide-react";
import { pricingCards } from "@/constants/landing-page";
import Modal from "../mondal";
import SubscriptionForm from "../forms/settings/subscription-form";
import Image from "next/image";

type Props = {};

const BillingSettings = async (props: Props) => {
  const plan = await onGetSubscriptionPlan();
  console.log("plan ", plan);
  const planFeatures = pricingCards.find(
    (card) => card.title.toUpperCase() === plan?.toUpperCase()
  )?.features;

  if (!planFeatures) return;

  console.log(planFeatures);
  return (
    <div className="lg:col-span-2 mt-10 bg-blue-50 border border-blue-300 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">Current Plan</h3>
      <p className="text-sm font-semibold text-blue-800">{plan}</p>
      <div className="flex gap-2 flex-col mt-2">
        {planFeatures.map((feature) => (
          <div key={feature} className="flex gap-2">
            <CheckCircle2 className="text-blue-500" />
            <p className="text-blue-700">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillingSettings;
