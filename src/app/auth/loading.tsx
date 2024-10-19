import Image from "next/image"
import logo from "../../../public/images/sahasraai.png";

export default function Loader() {
	return (
		<div className="w-[100vw] h-[100vh]">
			
           
             <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
             <Image src={logo} alt="A plate with food on it" priority width={100} height={100} />
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500">
                
            </div>
        </div>
		</div>
	);
}