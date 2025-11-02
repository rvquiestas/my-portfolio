import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import Container from './Container';
import Light_Dark_Btn from "./Light_Dark_Btn";

const Navbar = ({ currentPage = "Home" }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
    { name: "Projects", path: "/" },
    { name: "Contact", path: "/" },
  ];

  const isActive = (linkName) => currentPage === linkName;

  return (
    <header className="w-full top-0 left-0 z-50">
      <Container className="mt-4 sm:mt-16">
        <div className="flex items-center justify-end py-4">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10 mr-6">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.path}
                className={`group flex flex-col gap-0.5 text-sm font-medium ${
                  isActive(link.name) ? "text-secondary" : "text-primary"
                }`}
              >
                {link.name}
                <div 
                  className={`h-0.5 transition-all duration-300 ${
                    isActive(link.name) 
                      ? "bg-secondary w-full" 
                      : "bg-primary w-0 group-hover:w-full"
                  }`} 
                />
              </a>
            ))}
          </nav>
          <Light_Dark_Btn />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary ml-4"
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
                  className={`font-medium text-base transition ${
                    isActive(link.name) 
                      ? "text-secondary" 
                      : "text-primary hover:text-secondary"
                  }`}
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