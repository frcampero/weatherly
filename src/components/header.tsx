import { useTheme } from "@/context/theme-provider";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { CitySearch } from "./city-search";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
          <img
            src={isDark ? "/weatherly-logo2.png" : "/weatherly-logo.png"}
            alt="Klimate Logo"
            className="h-14"
          />
        </Link>

        <div className="flex gap-4">
          {/* Search */}
          <CitySearch />
          {/* Theme Toggle */}
          <div
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`hidden sm:flex items-center cursor-pointer transition-transform duration-500 ${
              isDark ? "rotate-180" : "rotate-0"
            }`}
          >
            {isDark ? (
              <Sun className="h-6 w-6 text-yellow-500" />
            ) : (
              <Moon className="h-6 w-6 text-yellow-500" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
