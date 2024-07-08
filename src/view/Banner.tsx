import { FaApple } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";
function Banner() {

    return (
        <div className="relative bg-gradient-to-b from-pink-0 to-pink-100 h-screen ">
            <div className="flex flex-col">
                <div className="flex flex-col text-center ">
                    
                    <div className=" absolute top-1/2 left-1/2 w-full flex flex-col 
                         -translate-x-[50%] -translate-y-[50%] items-center ">
                        <div className=" rounded-full m">

                        </div>
                        {/* text-4xl lg:text-7xl  */}
                        <h1 className="text-[7.5vw] lg:text-[3.75vw] -mt-60 font-normal text-center leading-relaxed  w-full  font-Frank
                        text-white ">
                            It's not a <span className="text-gray-300">dating app</span><br />
                            It's not a <span className="text-gray-300">matrimony app</span>
                            
                            </h1>
                            {/* text-xl lg:text-4xl */}
                        <p className="text-[22px] w-[80%] lg:text-[36px] lg:w-[55%] mt-16  text-center  mt-6 tracking-normal text-white font-normal font ">
                         Juleo is a Trusted Singles Club of Govt ID verified Members who actually meet, not just match
                        </p>
                        <div className="flex flex-col h-104  lg:flex-row gap-4 h-36">
                        <button
                            className="px-[40px] py-[10px] bg-white rounded-full mt-[90px] font-bold text-wine-100 text-[20px] lg:font-extrabold hover:bg-gray-300 
                            hover:text-wine-120">Join now
                        </button>
                        
                        <div className=" w-3/2 h-10 mt-[10vh] flex justify-center gap-3 lg:mt-[100px] ">
                            <FaApple className="text-white text-3xl opacity-80" />
                            <FaGooglePlay className="text-white text-2xl mt-1 opacity-80 "  />
                        </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Banner;
