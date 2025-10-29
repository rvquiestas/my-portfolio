import React from 'react'

const Navbar = () => {

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/' },
        { name: 'Resume', path: '/' },
        { name: 'Projects', path: '/' },
        { name: 'Contact', path: '/' },
    ];

    const ref = React.useRef(null)

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div ref={ref} className="h-4 md:h-4">
            <p className="w-10 h-[500px]"></p>
            <nav className={`fixed top-16 right-72 flex items-center justify-end px-4 md:px-16 lg:px-24 xl:px-32 duration-500 z-50 py-4 md:py-6`}>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} className={`group flex flex-col gap-0.5 text-black`}>
                            {link.name}
                            <div className={`bg-black h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
                    <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className={`h-6 w-6 cursor-pointer ""`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}

                </div>
            </nav>
        </div>
  )
}

export default Navbar
