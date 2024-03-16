const Nav=()=>{
    return(
        <>
        <div className="desktop-nav sm:flex justify-between text-2xl sm:py-10 hidden">
            <h1>Arjun Gr.</h1>
            <ul className="sm:flex gap-16">
                <li> <a href="#About">About</a></li>
                <li><a href="#Experience">Experience</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Contacts">Contact</a></li>
            </ul>
        </div>
        </>
    )
}

export default Nav