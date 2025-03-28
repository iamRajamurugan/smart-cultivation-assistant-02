
import { Camera } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingActionButton = () => {
  return (
    <Link
      to="/scanner"
      className="fixed bottom-24 z-20 left-1/2 transform -translate-x-1/2 h-16 w-16 rounded-full bg-farming-green text-white shadow-lg flex items-center justify-center glow-effect"
      aria-label="Open Disease Scanner"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-farming-green-dark to-farming-green opacity-80"></div>
      <div className="absolute inset-0 rounded-full pulse-ring"></div>
      <Camera size={28} className="relative z-10 animate-pulse-gentle" />
    </Link>
  );
};

export default FloatingActionButton;
