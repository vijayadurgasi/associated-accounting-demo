
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-slate">
              Associated Accounting
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate hover:text-slate/80 transition-colors">
              Features
            </a>
            <a href="#about" className="text-slate hover:text-slate/80 transition-colors">
              About
            </a>
            <a href="#pricing" className="text-slate hover:text-slate/80 transition-colors">
              Pricing
            </a>
            <Button
              variant="default"
              className="bg-slate text-white hover:bg-slate/90 transition-colors"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
