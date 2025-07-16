import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-serif font-bold text-primary mb-6 block">
              Inkwell
            </Link>
            <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
              A place for thoughtful writing and meaningful conversations. 
              Join us as we explore ideas that shape our world and inspire change.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-foreground font-semibold mb-6 text-sm uppercase tracking-wider">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/category/technology" className="text-muted-foreground hover:text-primary transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/category/design" className="text-muted-foreground hover:text-primary transition-colors">
                  Design
                </Link>
              </li>
              <li>
                <Link to="/category/lifestyle" className="text-muted-foreground hover:text-primary transition-colors">
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link to="/category/travel" className="text-muted-foreground hover:text-primary transition-colors">
                  Travel
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-foreground font-semibold mb-6 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Inkwell. All rights reserved. Crafted with care for thoughtful readers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;