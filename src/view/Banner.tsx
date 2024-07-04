
function Banner() {

    return (
        <div className="relative bg-gradient-to-b from-pink-0 to-pink-100 h-screen ">
            <div className="flex flex-col">
                <div className="flex flex-col text-center ">
                    <div>
                        <h1 className="text-6xl text-white leading-normal mb-8 font-Frank tracking-tight">
                            It's not a <span className="text-gray-300">dating app </span><br />
                            It's not a <span className="text-gray-300">matrimony app </span>
                        </h1>

                        <p className="text-2xl text-white font-light">
                            Juleo is a Trusted Single's Club of Govt ID verified <br />
                            Members who actually meet, not just match
                        </p>

                        <button className="px-8 py-2 bg-white rounded-full mt-10 text-xl font-bold text-pink-0">
                            Join now
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Banner;
