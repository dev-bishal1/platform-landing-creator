import { Menu } from "lucide-react";
import { useSidebar } from "@/contexts/SidebarContext";

const Navbar = () => {
  const { toggle } = useSidebar();

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary">PlatformPro</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
            <a href="#solutions" className="text-gray-600 hover:text-primary transition-colors">Solutions</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
            <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
              Get Started
            </button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggle}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;