const Nav=()=>{
    return(
        <>
        <div className="desktop-nav sm:flex justify-between text-2xl sm:py-10 hidden">
            <h1>Arjun Gr.</h1>
            <ul className="sm:flex gap-16">
                <li> <a href="#About">About</a></li>
                <li>Experience</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
        </>
    )
}

export default Nav