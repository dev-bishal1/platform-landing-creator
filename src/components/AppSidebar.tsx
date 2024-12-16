import { Home, Settings, Users, BarChart2, Server } from "lucide-react";
import { useSidebar } from "@/contexts/SidebarContext";

const menuItems = [
  { title: "Dashboard", icon: Home, url: "#" },
  { title: "Analytics", icon: BarChart2, url: "#analytics" },
  { title: "Infrastructure", icon: Server, url: "#infrastructure" },
  { title: "Team", icon: Users, url: "#team" },
  { title: "Settings", icon: Settings, url: "#settings" },
];

export function AppSidebar() {
  const { isOpen } = useSidebar();

  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-screen transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 w-64 bg-white border-r border-gray-200 pt-16`}
    >
      <div className="h-full px-3 py-4 overflow-y-auto">
        <div className="space-y-2">
          <h2 className="px-4 text-sm font-semibold text-gray-500">Platform</h2>
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.url}
                className="flex items-center px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900 group"
              >
                <item.icon className="w-4 h-4 mr-3 text-gray-500 group-hover:text-gray-900" />
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}