
import { Home, Leaf, Map, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import AIAssistant from "@/components/assistant/AIAssistant";

const BottomNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [assistantOpen, setAssistantOpen] = useState(false);

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { 
      icon: MessageCircle, 
      label: "Chat", 
      onClick: () => setAssistantOpen(true) 
    },
    { path: "/fertilizer", icon: Leaf, label: "Fertilizer" },
    { path: "/heatmap", icon: Map, label: "Heatmap" },
  ];

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg rounded-t-xl z-10">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item, index) => (
            item.path ? (
              <Link 
                key={index} 
                to={item.path}
                className={`flex flex-col items-center justify-center w-1/4 py-1 ${
                  currentPath === item.path 
                    ? "text-farming-green" 
                    : "text-gray-500"
                }`}
                aria-label={`Navigate to ${item.label}`}
              >
                <div className={`flex items-center justify-center rounded-full p-1.5 ${
                  currentPath === item.path ? "bg-farming-green/10" : ""
                }`}>
                  <item.icon 
                    size={22} 
                    className={`${
                      currentPath === item.path 
                        ? "animate-scale-in" 
                        : ""
                    }`} 
                  />
                </div>
                <span className="text-xs font-medium mt-0.5">{item.label}</span>
              </Link>
            ) : (
              <button
                key={index}
                onClick={item.onClick}
                className="flex flex-col items-center justify-center w-1/4 py-1 text-farming-sky"
                aria-label={item.label}
              >
                <div className="flex items-center justify-center rounded-full p-1.5 bg-farming-sky/10">
                  <item.icon size={22} />
                </div>
                <span className="text-xs font-medium mt-0.5">{item.label}</span>
              </button>
            )
          ))}
        </div>
      </div>
      
      <AIAssistant 
        isOpen={assistantOpen} 
        onClose={() => setAssistantOpen(false)} 
      />
    </>
  );
};

export default BottomNavigation;
