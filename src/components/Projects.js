import check from "../assets/checkmark.png"
import ecom from "../assets/ecom.jpg"
import dlog from "../assets/dailylog.jpg"
import cuisine from "../assets/cuisine.jpg"

const Projects=()=>{
    return(
        <div id="Projects" className="Projects mt-20 sm:mt-0 sm:h-[96vh] sm:pt-24">
            <div>
            <p className="text-center">Browse My Recent</p>
            <h2 className="text-center text-5xl font-bold sm:my-3">Projects</h2>
            </div>
            
            <div className="projects gap-5 sm:mt-40 mt-20 ">
                <div className="proj-cards">
                    <div className="sm:flex gap-5">
                        <div className="grow border mb-5 sm:mb-0 flex flex-col items-center px-5 py-7 rounded-3xl border-slate-500 justify-around">
                           <img src={ecom} alt="ecom" className="rounded-xl border w-80 sm:w-full" />
                           <p className="text-xl py-5 mb-5 font-bold">Ecommerce-site</p>
                           <div className="social-links ">
                            <a href="https://github.com/arjun-gr/E-com-Website" target="blank" className="border border-slate-500 p-3 rounded-3xl mr-2 transition-all hover:bg-slate-700 hover:text-white">Github</a>
                            <a href="https://ecom-arjun.netlify.app/" target="blank" className="border border-slate-500 p-3 rounded-3xl ml-2 transition-all hover:bg-slate-700 hover:text-white">Live Demo</a>
                           </div>
                        </div>
                        {/* ---------------------------------------- */}
                        <div className="grow border mb-5 sm:mb-0 flex flex-col items-center p-5 rounded-3xl border-slate-500 justify-around">
                           <img src={dlog} alt="ecom" className="rounded-xl border w-80 sm:w-full" />
                           <p className="text-xl py-5 mb-5 font-bold">Daily Log</p>
                           <div className="social-links ">
                            <a href="https://github.com/arjun-gr/bkend" target="blank" className="border border-slate-500 p-3 rounded-3xl mr-2 transition-all hover:bg-slate-700 hover:text-white">Github</a>
                            <a href="https://backendpractice-1kiw.onrender.com/" target="blank" className="border border-slate-500 p-3 rounded-3xl ml-2 transition-all hover:bg-slate-700 hover:text-white">Live Demo</a>
                           </div>
                        </div>
                        {/* ------------------------------------------- */}
                        <div className="grow border mb-5 sm:mb-0 flex flex-col items-center p-5 rounded-3xl border-slate-500 justify-around">
                           <img src={cuisine} alt="ecom" className="rounded-xl border w-80 sm:w-full" />
                           <p className="text-xl py-5 mb-5 font-bold">Cuisine</p>
                           <div className="social-links ">
                            <a href="https://github.com/arjun-gr/food-Website" target="blank" className="border border-slate-500 p-3 rounded-3xl mr-2 transition-all hover:bg-slate-700 hover:text-white">Github</a>
                            <a href="https://arjun-food.netlify.app/" target="blank" className="border border-slate-500 p-3 rounded-3xl ml-2 transition-all hover:bg-slate-700 hover:text-white">Live Demo</a>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Projects