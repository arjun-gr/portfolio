import about from "../assets/about.png"
import exp from "../assets/exp.png"
import edu from '../assets/education.png'

const About=()=>{
    return(
        <div id="About" className="About sm:h-[96vh] sm:pt-24">
            <div>
            <p className="text-center">Get to Know More</p>
            <h2 className="text-center text-5xl font-bold sm:my-3">About Me</h2>
            </div>
            
            <div className="about-container lg:flex gap-5 sm:mt-40 mt-20">
                <div className="about-image lg:w-[990px] flex justify-center">
                    <img src={about} alt="about" className="w-80" />
                </div>
                <div className="about-right">
                    <div className="exp-edu sm:flex gap-5">
                        <div className="exp border sm:w-96 flex flex-col items-center p-10 rounded-3xl border-slate-500">
                            <img src={exp} alt="experience" className="w-10"/>
                            <p className="text-2xl font-bold">Experience</p>
                            <p className="text-slate-500">Fresher</p>
                            <p className="text-slate-500">Frontend Development</p>
                        </div>
                        {/* ---------------------------------------- */}
                        <div className="exp border mt-4 sm:w-96 sm:mt-0 flex flex-col items-center p-10 rounded-3xl border-slate-500">
                            <img src={edu} alt="experience" className="w-10"/>
                            <p className="text-2xl font-bold">Education</p>
                            <p className="text-slate-500">Bachelors</p>
                            <p className="text-slate-500">B.M.S</p>
                        </div>
                    </div>
                    <p className="mt-5 text-slate-500">Greetings! I'm Arjun Gahatraj, an enthusiastic and dedicated web developer fueled by a relentless passion for crafting remarkable digital experiences. With a background steeped in HTML, CSS, JavaScript, and an array of cutting-edge technologies, I possess the skills and expertise needed to transform your ideas into captivating online realities.</p>
                </div>
            </div>
        
        </div>
    )
}

export default About