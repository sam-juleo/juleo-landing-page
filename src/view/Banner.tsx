import { FaApple } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";
function Banner() {

    return (
        <div className="relative bg-gradient-to-b from-pink-0 to-pink-100 h-screen ">
            <div className="flex flex-col">
                <div className="flex flex-col text-center ">
                    {/* <div>
                        <h1 className="text-6xl text-white leading-normal mb-8 font-Frank tracking-tight md:py-8 h-[130px] md:h-[136px] ">
                            It's not a <span className="text-gray-300 ">dating app </span><br />
                            It's not a <span className="text-gray-300">matrimony app </span>
                        </h1>

                        <p className="text-2xl text-white font-light mt-20">
                            Juleo is a Trusted Single's Club of Govt ID verified <br />
                            Members who actually meet, not just match
                        </p>

                        <button className="px-8 py-2 bg-white rounded-full mt-20 text-xl font-bold text-pink-0">
                            Join now
                        </button>
                    </div> */}
                    <div className=" absolute top-1/2 left-1/2 w-full flex flex-col 
                         -translate-x-[50%] -translate-y-[50%] items-center ">
                        <div className=" rounded-full m">

                        </div>
                        <h1 className="text-4xl lg:text-7xl -mt-50 font-normal text-center leading-none  px-3 w-3/4 tracking-tighter font-Frank
                        text-white ">
                            It's not a <span className="text-gray-300">dating app</span><br />
                            It's not a <span className="text-gray-300">matrimony app</span>
                            
                            </h1>
                        
                        <p className="w-11/12 text-center text-xl lg:text-4xl mt-6 tracking-normal text-white font-light ">
                         Juleo is a Trusted Singles Club of Govt ID verified<br/> Members who actually meet, not just match
                        </p>
                        <div className="flex flex-col h-104  lg:flex-row gap-10 h-36">
                        <button
                            className="px-10 py-3 text-4xl lg:px-10 -py-10 bg-white text-wine-100 mt-20 rounded-full font-semibold lg:font-bold text-xl lg:text-base tracking-tight">Join now
                        </button>
                        
                        <div className=" w-3/2 h-10 mt-24 flex justify-center gap-3 ">
                            <FaApple className="text-white text-3xl opacity-80" />
                            <FaGooglePlay className="text-white text-2xl mt-1 opacity-80"  />
                        </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Banner;
