import pfp from "../assets/pfp.jpg"
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"

const Hero=()=>{
    return(
        <div className="Hero lg:flex justify-center sm:h-[85vh] gap-10 items-center py-28 h-[100vh]">
            <div className="Left ">
                <img src={pfp} alt="pfp" className="w-[500px] rounded-full" />
            </div>
            <div className="Right text-center">
                <p className="font-bold text-slate-500 pb-2">Hello, I'm</p>
                <h1 className="text-5xl font-bold">Arjun Gahatraj</h1>
                <h3 className="font-bold text-3xl text-slate-500 py-4">Frontend Developer</h3>

                <div className="hero-buttons">
                <button className="border border-gray-500 p-3 rounded-3xl w-36 mr-2 hover:bg-slate-800 hover:text-white transition-all">Download CV</button>
                <button className="bg-slate-800 p-3 rounded-3xl ml-2 w-36 text-white hover:bg-slate-900 transition-all"> <a href="#Contacts">Contact Info</a></button>
                </div>

                <div className="hero-icons flex justify-center gap-4 mt-3">
                   <a href="https://github.com/arjun-gr" target="blank"> <img src={github} alt="github" className="w-8"/></a>
                   <a href="https://www.linkedin.com/in/arjun-gahatraj/" target="blank"> <img src={linkedin} alt="github" className="w-8"/></a>
                </div>
            </div>
        </div>
    )
}

export default Hero