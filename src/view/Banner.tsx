import { FaApple } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";
import ModelTwo from '../assets/ModelTwo.png';
import Model from '../assets/Model.png';
import Mithila1 from '../assets/Juleo0212-wobg-smooth4.png'
function Banner() {

    return (
        <div className=" relative min-h-screen bg-gradient-to-b from-[#3D0723] to-[#C40278] ">
            <div className="flex flex-col ">

                {/* Image Container */}
                {/* Desktop */}
                <div className='lg:items-center lg:justify-center hidden lg:flex '>
                    {/* <div className='lg:bg-gradient-to-b from-transparent to-wine-100 lg:w-full lg:relative z-50 lg:h-[21vh] lg:top-[16vh]'>
                    </div> */}
                    <img
                        className='absolute z-0 w-[30vw] lg:max-w-[600px] left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                        style={{ top: '20%' }}
                        src={Mithila1}
                        alt=""
                    />
                </div>

            
               {/* Mobile */}
               <div className='items-center justify-center sm:flex lg:hidden '>
                    {/* <div className='bg-gradient-to-b from-transparent  
                    to-[#ffffff] z-20 h-[150px] relative top-[16vh]' >
                    </div> */}
                    <img
                        className='absolute  z-[10] w-[90vw] max-w-[500px] left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                        style={{ top: '20%' }}
                        src={Mithila1}
                        alt=""
                    />
                </div>



                {/* Gradient Overlay */}
                {/* <div className="h-[100vh] absolute inset-x-0 bottom-0 bg-gradient-to-b from-transparent via-[#7A0349]  to-[#C40278] z-[10] pointer-events-none"></div> */}

                <div className="h-[100vh] absolute inset-0 bottom-0 bg-gradient-to-b 
                from-transparent from-10%
                via-[#7A0349] via-35%
                to-[#C40278]
                
                z-[10] pointer-events-none"></div>

                   {/* Text Content */}
                <div className="flex flex-col text-center ">

                    <div className=" absolute z-[10] top-1/2 left-1/2 w-full flex flex-col 
                         -translate-x-[50%] -translate-y-[50%] items-center ">
                        <div className=" rounded-full m">

                        </div>
                        {/* text-4xl lg:text-7xl  */}
                        <h1 className="text-[7.5vw] mt-[85px] lg:text-[4rem] lg:mt-[15vh] font-normal text-center leading-tight w-full font-Frank text-white ">
                            It's not a <span className="text-white opacity-80">dating app</span><br />
                            It's not a <span className="text-white opacity-80">matrimony app</span>
                        </h1>

                        {/* text-xl lg:text-4xl */}
                        <p className="text-[4vw] w-[80%] lg:text-[2rem] lg:w-[55%] lg:mt-1  text-center  mt-4 tracking-normal text-white font-normal font-body ">
                            Juleo is a Trusted Singles Club of Govt ID verified Members who actually meet, not just match
                        </p>
                        <div className="flex flex-col h-104  lg:flex-row gap-4 h-36 lg:-mt-16">
                            <a href='https://join.juleo.club/l'
                                className="px-[60px] py-2 font-bold text-[20px] mt-6 lg:text-[30px] bg-white lg:px-12 lg:py-1 lg:mt-20 text-wine-100 bold rounded-full lg:font-bold lg:mr-4 flex items-center justify-center">
                                Join now
                            </a>

                            <div className=" w-3/2 h-10 mt-[2vh] flex gap-4 justify-center lg:gap-7 lg:mt-[95px] ">
                                <a href="https://apps.apple.com/us/app/juleo-trusted-singles-club/id6479004707"> <FaApple className="text-white text-3xl lg:text-4xl opacity-80" /></a>
                                <a href="https://play.google.com/store/apps/details?id=com.juleoclub.juleo"> <FaGooglePlay className="text-white text-2xl lg:text-3xl mt-1 opacity-80 " /></a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Banner;
