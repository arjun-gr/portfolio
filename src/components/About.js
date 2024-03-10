import about from "../assets/about.png"
import exp from "../assets/exp.png"
import edu from '../assets/education.png'

const About=()=>{
    return(
        <div className="About h-[96vh] pt-24">
            <div>
            <p className="text-center">Get to Know More</p>
            <h2 className="text-center text-5xl font-bold my-3">About Me</h2>
            </div>
            
            <div className="about-container flex gap-5 mt-40">
                <div className="about-image w-[990px]">
                    <img src={about} alt="about" className="w-80" />
                </div>
                <div className="about-right">
                    <div className="exp-edu flex gap-5">
                        <div className="exp border w-96 flex flex-col items-center p-10 rounded-3xl border-slate-500">
                            <img src={exp} alt="experience" className="w-10"/>
                            <p className="text-2xl font-bold">Experience</p>
                            <p className="text-slate-500">Fresher</p>
                            <p className="text-slate-500">Frontend Development</p>
                        </div>
                        {/* ---------------------------------------- */}
                        <div className="exp border w-96 flex flex-col items-center p-10 rounded-3xl border-slate-500">
                            <img src={exp} alt="experience" className="w-10"/>
                            <p className="text-2xl font-bold">Experience</p>
                            <p className="text-slate-500">Fresher</p>
                            <p className="text-slate-500">Frontend Development</p>
                        </div>
                    </div>
                    <p className="mt-5 text-slate-500">Greetings! I'm Arjun Gahatraj, an enthusiastic and dedicated web developer fueled by a relentless passion for crafting remarkable digital experiences. With a background steeped in HTML, CSS, JavaScript, and an array of cutting-edge technologies, I possess the skills and expertise needed to transform your ideas into captivating online realities.</p>
                </div>
            </div>
        
        </div>
    )
}

export default About