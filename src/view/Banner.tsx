

import { IoLogoApple } from "react-icons/io5"
import { FaGooglePlay } from "react-icons/fa";
function Banner() {

    return (
        <div className="relative bg-gradient-to-b from-pink-0 to-pink-100 h-screen ">
            <div className="flex flex-col">
                <div className="flex flex-col text-center ">
                    <div>
                        <h1 className="text-6xl text-white leading-normal mb-8 font-Frank tracking-tight mt-20">
                            It's not a <span className="text-gray-300">dating app </span><br />
                            It's not a <span className="text-gray-300">matrimony app </span>
                        </h1>

                        <p className="text-2xl text-white font-light">
                            Juleo is a Trusted Single's Club of Govt ID verified <br />
                            Members who actually meet, not just match
                        </p>

                        <div className="flex align-center justify-center gap-4"> 
                        <button className="px-10 py-3 bg-white rounded-full mt-10 text-4xl font-bold text-wine-100">
                            Join now
                        </button>
                        <div className="flex gap-4 align-center ">
                        <IoLogoApple className="text-gray-300 w-10 h-10 mt-12"/>
                        <FaGooglePlay  className="text-gray-300 w-8 h-8 mt-14"/>

                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Banner;
