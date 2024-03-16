import check from "../assets/checkmark.png"

const Experience=()=>{
    return(
        <div id="Experience" className="Experience mt-20 sm:mt-0 sm:h-[96vh] sm:pt-24">
            <div>
            <p className="text-center">Explore My</p>
            <h2 className="text-center text-5xl font-bold sm:my-3">Experience</h2>
            </div>
            
            <div className="lang-Exp gap-5 sm:mt-40 mt-20 ">
                <div className="cards">
                    <div className="exp-cards sm:flex gap-5">
                        <div className="front-end grow border flex flex-col items-center p-5 rounded-3xl border-slate-500 justify-around mb-5 sm:mb-0">
                            <p className="text-2xl font-bold text-slate-500">Frontend Development</p>
                            <div className="langs flex flex-wrap flex-row gap-5 mt-5 justify-around">
                                <div className="flex justify-center items-center">
                                <img src={check} alt="check" className="w-[30px]" />
                                <p className="w-40 text-xl">HTML</p>
                                </div>
                                <div className="flex justify-center items-center">
                                <img src={check} alt="check" className="w-[30px]" />
                                <p className="w-40 text-xl">CSS</p>
                                </div>
                                <div className="flex justify-center items-center">
                                <img src={check} alt="check" className="w-[30px]" />
                                <p className="w-40 text-xl">JavaScript</p>
                                </div>
                                <div className="flex justify-center items-center">
                                <img src={check} alt="check" className="w-[30px]" />
                                <p className="w-40 text-xl">ReactJS</p>
                                </div>
                                <div className="flex justify-center items-center">
                                <img src={check} alt="check" className="w-[30px]" />
                                <p className="w-40 text-xl">TailwindCSS</p>
                                </div>
                                <div className="flex justify-center items-center">
                                <img src={check} alt="check" className="w-[30px]" />
                                <p className="w-40 text-xl">Bootstrap</p>
                                </div>
                               
                            </div>
                        </div>
                        {/* ---------------------------------------- */}
                        <div className="front-end grow border flex flex-col items-center p-5 rounded-3xl border-slate-500 justify-around">
                            <p className="text-2xl font-bold text-slate-500">Backend Development</p>
                            <div className="langs flex flex-wrap flex-row gap-5 mt-5 justify-around">
                                <div className="flex justify-center items-center">
                                <img src={check} alt="check" className="w-[30px]" />
                                <p className="w-40 text-xl">NodeJS</p>
                                </div>
                                <div className="flex justify-center items-center">
                                <img src={check} alt="check" className="w-[30px]" />
                                <p className="w-40 text-xl">Express</p>
                                </div>
                                <div className="flex justify-center items-center">
                                <img src={check} alt="check" className="w-[30px]" />
                                <p className="w-40 text-xl">MongoDB</p>
                                </div>
                                <div className="flex justify-center items-center">
                                <img src={check} alt="check" className="w-[30px]" />
                                <p className="w-40 text-xl">MySQL</p>
                                </div>
                                <div className="flex justify-center items-center">
                                <img src={check} alt="check" className="w-[30px]" />
                                <p className="w-40 text-xl">Python</p>
                                </div>
                                <div className="flex justify-center items-center">
                                <img src={check} alt="check" className="w-[30px]" />
                                <p className="w-40 text-xl">Java</p>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Experience