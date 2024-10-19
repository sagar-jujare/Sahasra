"use client";

import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { useAuthContext } from "@/context/use-auth-context";
import TypeSelectionForm from "./type-selection-form";
import dynamic from "next/dynamic";

const DetailForm = dynamic(() => import("./account-details-form"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const OTPForm = dynamic(() => import("./otp-form"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const RegistrationFormStep: React.FC = () => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  const { currentStep } = useAuthContext();
  const [onOTP, setOnOTP] = useState<string>("");
  const [onUserType, setOnUserType] = useState<"owner" | "student">("owner");

  React.useEffect(() => {
    setValue("otp", onOTP);
  }, [onOTP, setValue]);

  switch (currentStep) {
    case 1:
      return (
        <TypeSelectionForm
          register={register}
          userType={onUserType}
          setUserType={setOnUserType}
        />
      );
    case 2:
      return <DetailForm errors={errors} register={register} />;
    case 3:
      return <OTPForm onOTP={onOTP} setOTP={setOnOTP} />;
    default:
      return <div>Unknown step</div>;
  }
};

export default RegistrationFormStep;
