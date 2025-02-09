
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { CircleDollarSign, PieChart, Shield, Building2, CreditCard } from "lucide-react";

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
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate/50 to-slate p-6 no-underline outline-none focus:shadow-md"
                            href="#features"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-white">
                              Features
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Explore our comprehensive suite of financial management tools
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="#features" title="Smart Bookkeeping" icon={<CircleDollarSign className="w-4 h-4" />}>
                        AI-powered bookkeeping that saves time and reduces errors
                      </ListItem>
                      <ListItem href="#features" title="Real-time Analytics" icon={<PieChart className="w-4 h-4" />}>
                        Instant insights into your business performance
                      </ListItem>
                      <ListItem href="#features" title="Secure & Compliant" icon={<Shield className="w-4 h-4" />}>
                        Bank-level security and compliance
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>About</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <ListItem href="#about" title="Our Company" icon={<Building2 className="w-4 h-4" />}>
                        Learn about our mission and vision
                      </ListItem>
                      <ListItem href="#about" title="Why Choose Us" icon={<Shield className="w-4 h-4" />}>
                        What sets us apart from others
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Pricing</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <ListItem href="#pricing" title="Plans & Pricing" icon={<CreditCard className="w-4 h-4" />}>
                        Flexible plans for businesses of all sizes
                      </ListItem>
                      <ListItem href="#pricing" title="Enterprise" icon={<Building2 className="w-4 h-4" />}>
                        Custom solutions for large organizations
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

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

const ListItem = ({
  className,
  title,
  children,
  href,
  icon,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
  icon: React.ReactNode;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate/10 focus:bg-slate/10 ${className}`}
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none text-slate">
            {icon}
            <span>{title}</span>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-slate/70">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};

