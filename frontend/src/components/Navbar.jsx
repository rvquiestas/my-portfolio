import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import Container from './Container';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/" },
    { name: "Resume", path: "/" },
    { name: "Projects", path: "/" },
    { name: "Contact", path: "/" },
  ];

  return (
    <header className="w-full top-0 left-0 z-50">
      <Container className="mt-4 sm:mt-16">
        <div className="flex items-center justify-end py-4">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.path}
                className="group flex flex-col gap-0.5 text-primary text-sm font-medium"
              >
                {link.name}
                <div className="bg-primary h-0.5 w-0 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoMdClose size={28} /> : <LuMenu size={28} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg shadow-lg border-t border-gray-200">
          <Container>
            <nav className="flex flex-col items-end py-4 space-y-4">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-primary font-medium text-base hover:text-blue-600 transition"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Navbar;