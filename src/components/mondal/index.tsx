"use client"

import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ArrowBigLeftIcon, ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useChatContext } from '../../context/user-chat-context'; 

type Props = {
  trigger: React.ReactNode
  children: React.ReactNode
  title: string
  description: string
  type?: 'Integration'
  logo?: string
  
}

const Modal = ({
  trigger,
  children,
  title,
  description,
  type,
  logo,

}: Props) => {
  const { isModelOpen, setIsModelOpen } = useChatContext();
  switch (type) {
    case 'Integration':
      return (
        <Dialog>
          <DialogTrigger asChild>{trigger}</DialogTrigger>
          <DialogContent>
            <div className="flex justify-center gap-3">
              <div className="w-12 h-12 relative">
                <Image
                  src={`https://ucarecdn.com/2c9bd4ab-1f00-41df-bad2-df668f65a232/`}
                  fill
                  alt="Corinna"
                />
              </div>
              <div className="text-gray-400">
                <ArrowLeft size={20} />
                <ArrowRight size={20} />
              </div>
              <div className="w-12 h-12 relative">
                <Image
                  src={`https://ucarecdn.com/${logo}/`}
                  fill
                  alt="Stripe"
                />
              </div>
            </div>
            <DialogHeader className="flex items-center">
              <DialogTitle className="text-xl">{title}</DialogTitle>
              <DialogDescription className=" text-center">
                {description}
              </DialogDescription>
            </DialogHeader>
            {children}
          </DialogContent>
        </Dialog>
      )
    default:
      
      return (

        isModelOpen ? (<Dialog >
        <DialogTrigger  asChild>{trigger}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl">{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>) : null
        
      )
  }
}

export default Modal

// "use client"

// import React from 'react';
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '@/components/ui/dialog';
// import { ArrowLeft, ArrowRight } from 'lucide-react';
// import Image from 'next/image';
// import { useAuthContextHook } from '../../context/use-auth-context'; 

// type Props = {
//   trigger: React.ReactNode;
//   children: React.ReactNode;
//   title: string;
//   description: string;
//   type?: 'Integration';
//   logo?: string;
// };

// const Modal = ({
//   trigger,
//   children,
//   title,
//   description,
//   type,
//   logo,
// }: Props) => {
//   const { isModelOpen, setisModelOpen } = useAuthContextHook();

//   return (
//     <Dialog open={isModelOpen} >
//       <DialogTrigger asChild>{trigger}</DialogTrigger>
//       <DialogContent>
//         {type === 'Integration' && (
//           <div className="flex justify-center gap-3">
//             <div className="w-12 h-12 relative">
//               <Image
//                 src={`https://ucarecdn.com/2c9bd4ab-1f00-41df-bad2-df668f65a232/`}
//                 fill
//                 alt="Corinna"
//               />
//             </div>
//             <div className="text-gray-400">
//               <ArrowLeft size={20} />
//               <ArrowRight size={20} />
//             </div>
//             <div className="w-12 h-12 relative">
//               <Image
//                 src={`https://ucarecdn.com/${logo}/`}
//                 fill
//                 alt="Stripe"
//               />
//             </div>
//           </div>
//         )}
//         <DialogHeader>
//           <DialogTitle className="text-xl">{title}</DialogTitle>
//           <DialogDescription>{description}</DialogDescription>
//         </DialogHeader>
//         {children}
//       </DialogContent>
//     </Dialog>
//   );
// }

// export default Modal;
