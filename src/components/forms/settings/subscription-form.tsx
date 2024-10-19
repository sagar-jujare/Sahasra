"use client";
import { Loader } from "@/components/loader";
import CashfreePayment from "@/components/settings/cashfree";
import SubscriptionCard from "@/components/settings/subscription-card";
import { Button } from "@/components/ui/button";
import { useSubscriptions } from "@/hooks/billing/use-billing";
import React, { useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";
import { useChatContext } from "../../../context/user-chat-context";
type Props = {
  plan: "STANDARD" | "PRO" | "ULTIMATE";
};

const SubscriptionForm = ({ plan }: Props) => {
  const { loading, onSetPayment, payment, onUpdatetToFreTier } =
    useSubscriptions(plan);
  const { isModelOpen, setIsModelOpen } = useChatContext();
  // State to track if the user clicked the "Confirm" button
  const [isConfirmClicked, setIsConfirmClicked] = useState(false);

  const handleConfirmClick = () => {
    // Trigger the cashfree payment when user confirms
    setIsConfirmClicked(true);
    console.log("paymnet:", payment);

    // setisModelOpen(false  )
    console.log("model:", isModelOpen);
    // Optionally you can also trigger any further actions like calling onUpdatetToFreTier
    // onUpdatetToFreTier();
  };

  return (
    <Loader loading={loading}>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <SubscriptionCard
            title="STANDARD"
            description="Perfect if you’re just getting started with Corinna AI"
            price="0"
            payment={payment}
            onPayment={onSetPayment}
            id="STANDARD"
          />

          <SubscriptionCard
            title="PRO"
            description="Perfect if you’re just getting started with Corinna AI"
            price="4799"
            payment={payment}
            onPayment={onSetPayment}
            id="PRO"
          />

          <SubscriptionCard
            title="ULTIMATE"
            description="Perfect if you’re just getting started with Corinna AI"
            price="5999"
            payment={payment}
            onPayment={onSetPayment}
            id="ULTIMATE"
          />
        </div>

        {/* Conditionally render the CashfreePayment component when confirmed */}
        {isConfirmClicked && <CashfreePayment payment={payment} />}

        {/* Render Confirm button only if the user has chosen PRO */}
        {(payment === "PRO" || payment === "ULTIMATE") && (
          <Button onClick={handleConfirmClick}>
            <Loader loading={loading}>Confirm</Loader>
          </Button>
        )}
      </div>
    </Loader>
  );
};

export default SubscriptionForm;

// 'use client';
// import { Loader } from '@/components/loader';
// import CashfreePayment from '@/components/settings/cashfree';
// import SubscriptionCard from '@/components/settings/subscription-card';
// import { Button } from '@/components/ui/button';
// import { useSubscriptions } from '@/hooks/billing/use-billing';
// import React, { useState } from 'react';
// import { DialogClose } from '@radix-ui/react-dialog';

// type Props = {
//   plan: 'STANDARD' | 'PRO' | 'ULTIMATE';
// };

// const SubscriptionForm = ({ plan }: Props) => {
//   const { loading, onSetPayment, payment, onUpdatetToFreTier } = useSubscriptions(plan);
//   const [isConfirmClicked, setIsConfirmClicked] = useState(false);

//   const handleConfirmClick = () => {
//     setIsConfirmClicked(true);
//     console.log("payment:", payment);
//     // Additional actions can be triggered here
//     // onUpdatetToFreTier();
//   };

//   return (
//     <Loader loading={loading}>
//       <div className="flex flex-col gap-5">
//         <div className="flex flex-col gap-3">
//           <SubscriptionCard
//             title="STANDARD"
//             description="Perfect if you’re just getting started with Corinna AI"
//             price="0"
//             payment={payment}
//             onPayment={onSetPayment}
//             id="STANDARD"
//           />
//           <SubscriptionCard
//             title="PRO"
//             description="Perfect if you’re just getting started with Corinna AI"
//             price="15"
//             payment={payment}
//             onPayment={onSetPayment}
//             id="PRO"
//           />
//           <SubscriptionCard
//             title="ULTIMATE"
//             description="Perfect if you’re just getting started with Corinna AI"
//             price="35"
//             payment={payment}
//             onPayment={onSetPayment}
//             id="ULTIMATE"
//           />
//         </div>

//         {/* Conditionally render the CashfreePayment component when confirmed */}
//         {isConfirmClicked && <CashfreePayment payment={payment} />}

//         {/* Render Confirm button only if the user has chosen PRO or ULTIMATE */}
//         {(payment === 'PRO' || payment === 'ULTIMATE') && (
//           <DialogClose asChild>
//             <Button onClick={handleConfirmClick}>
//               <Loader loading={loading}>Confirm</Loader>
//             </Button>
//           </DialogClose>
//         )}
//       </div>
//     </Loader>
//   );
// };

// export default SubscriptionForm;
