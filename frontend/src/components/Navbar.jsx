
const Navbar = () => {

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/' },
        { name: 'Resume', path: '/' },
        { name: 'Projects', path: '/' },
        { name: 'Contact', path: '/' },
    ];

  return (
    <div className="">
            <nav className={`absolute 2xl:top-24 2xl:right-80`}>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} className={`group flex flex-col gap-0.5 text-primary`}>
                            {link.name}
                            <div className={`bg-primary h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}


                {/* Mobile Menu */}

            </nav>
        </div>
  )
}

export default Navbar
