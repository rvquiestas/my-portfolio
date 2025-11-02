import { ThemeProvider } from "../Context/ThemeContext";
import { IoSunny, IoMoon } from "react-icons/io5";

const Light_Dark_Btn = () => {
  const { theme, toggleTheme } = ThemeProvider.useTheme();

  return (
    <div className="flex items-center">
      <button
        onClick={toggleTheme}
        className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
          theme === "dark" ? "bg-primary" : "bg-primary"
        }`}
      >
        {/* Toggle circle */}
        <div
          className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-secondary flex items-center justify-center transition-transform duration-300 ${
            theme === "dark" ? "translate-x-8" : "translate-x-0"
          }`}
        >
          {theme === "dark" ? (
            <IoMoon className="text-white text-sm" />
          ) : (
            <IoSunny className="text-white text-sm" />
          )}
        </div>
      </button>
    </div>
  );
};

export default Light_Dark_Btn;