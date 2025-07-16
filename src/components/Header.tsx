import { Search, Menu, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-serif font-bold text-primary tracking-tight">
            Inkwell
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
              Home
            </Link>
            <Link to="/category/technology" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
              Technology
            </Link>
            <Link to="/category/design" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
              Design
            </Link>
            <Link to="/category/lifestyle" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
              Lifestyle
            </Link>
            <Link to="/category/travel" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
              Travel
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9" onClick={toggleDarkMode}>
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden h-9 w-9">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;