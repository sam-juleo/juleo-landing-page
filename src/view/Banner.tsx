import { useEffect } from 'react';
import { FaApple } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";

function Banner() {
    useEffect(() => {
        // Disable scrolling
        document.body.classList.add('overflow-hidden');
        
        // Cleanup function to enable scrolling again
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    return (
        <div className="relative bg-gradient-to-b from-pink-0 to-pink-100 h-screen ">
            <div className="flex flex-col">
                <div className="flex flex-col text-center ">
                    
                    <div className=" absolute top-1/2 left-1/2 w-full flex flex-col 
                         -translate-x-[50%] -translate-y-[50%] items-center ">
                        <div className=" rounded-full m">

                        </div>
                        {/* text-4xl lg:text-7xl  */}
                        <h1 className="text-[7.5vw] lg:text-[3.75vw] -mt-60 font-normal text-center leading-tight  w-full  font-Frank
                        text-white ">
                            It's not a <span className="text-white opacity-80">dating app</span><br />
                            It's not a <span className="text-white opacity-80">matrimony app</span>
                            
                            </h1>
                            {/* text-xl lg:text-4xl */}
                        <p className="text-[22px] w-[80%] lg:text-[36px] lg:w-[55%] lg:mt-16  text-center  mt-10 tracking-normal text-white font-normal font-body ">
                         Juleo is a Trusted Singles Club of Govt ID verified Members who actually meet, not just match
                        </p>
                        <div className="flex flex-col h-104  lg:flex-row gap-4 h-36">
                        <button
                            className="px-[40px] py-[10px] text-[20px] font-body rounded-full mt-[90px] font-[700] text-white lg:text-[40px] lg:font-[700] opacity-80 ">By invite only
                        </button>
                        
                        <div className=" w-3/2 h-10 mt-[6vh] flex gap-4 justify-center lg:gap-7 lg:mt-[114px] ">
                            <FaApple className="text-white text-3xl lg:text-4xl opacity-80" />
                            <FaGooglePlay className="text-white text-2xl lg:text-3xl mt-1 opacity-80 "  />
                        </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Banner;
