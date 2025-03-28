
import { Home, Camera, BarChart3, MessageSquare, Map } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/scanner", icon: Camera, label: "Scanner" },
    { path: "/market", icon: BarChart3, label: "Market" },
    { path: "/community", icon: MessageSquare, label: "Community" },
    { path: "/heatmap", icon: Map, label: "Heatmap" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg rounded-t-xl z-10">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            to={item.path}
            className={`flex flex-col items-center justify-center w-1/5 py-1 ${
              currentPath === item.path 
                ? "text-farming-green" 
                : "text-gray-500"
            }`}
          >
            <item.icon 
              size={24} 
              className={`mb-1 ${
                currentPath === item.path 
                  ? "animate-scale-in" 
                  : ""
              }`} 
            />
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
