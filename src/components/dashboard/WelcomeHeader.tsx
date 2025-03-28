
import { Bell } from "lucide-react";
import { useState } from "react";

interface WelcomeHeaderProps {
  farmerName?: string;
  avatarUrl?: string;
}

const WelcomeHeader = ({ 
  farmerName = "Rajesh",
  avatarUrl = "https://images.unsplash.com/photo-1520052203542-d3095f1b6cf0?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
}: WelcomeHeaderProps) => {
  const [notifications, setNotifications] = useState(3);
  
  const greeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return "Good Morning";
    if (hours < 17) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="bg-gradient-to-r from-farming-green-dark to-farming-green p-4 pt-8 text-white shadow-md">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-full bg-white/20 border-2 border-white overflow-hidden mr-3">
            {avatarUrl ? (
              <img src={avatarUrl} alt={farmerName} className="h-full w-full object-cover" />
            ) : (
              <div className="h-full w-full flex items-center justify-center text-xl font-bold">
                {farmerName.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <p className="text-sm opacity-90">{greeting()}</p>
            <h1 className="text-xl font-bold">{farmerName}</h1>
          </div>
        </div>
        
        <div className="relative">
          <button className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
            <Bell size={20} />
          </button>
          {notifications > 0 && (
            <span className="absolute -top-1 -right-1 bg-farming-gold text-farming-green-dark rounded-full text-xs w-5 h-5 flex items-center justify-center font-medium">
              {notifications}
            </span>
          )}
        </div>
      </div>
      
      <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
        <p className="text-sm">Your recent crop health analysis shows positive results.</p>
        <p className="text-xs mt-1 opacity-80">Updated 2 hours ago</p>
      </div>
    </div>
  );
};

export default WelcomeHeader;
