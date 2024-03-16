import email from "../assets/email.png"
import linkedin from "../assets/linkedin.png"

const Contacts=()=>{
    return(
        <div id="Contacts" className="contacts mt-20 sm:mt-0 sm:h-[96vh] flex justify-center items-center">
            <div>
            <p className="text-center">Get in Touch</p>
            <h2 className="text-center text-5xl font-bold sm:my-3">Contact Me</h2>
            <div className="border border-slate-500 p-10 rounded-3xl flex gap-7 mt-14">
                <div className="flex items-center">
                <img src={email} alt="email" className="w-10" />
                <a href="mailto:arjungr8898@gmail.com">arjungr8898@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                <img src={linkedin} alt="linkedin" className="w-8" />
                <a href="https://www.linkedin.com/in/arjun-gahatraj/" target="blank">LinkedIn</a>
                </div>
            </div>
            </div>
            
           
        
        </div>
    )
}

export default Contacts