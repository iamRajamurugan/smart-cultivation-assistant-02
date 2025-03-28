
import { Camera, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const DiseaseScanner = () => {
  return (
    <div className="mt-6 mx-4">
      <h2 className="text-lg font-bold mb-3 flex items-center">
        <Leaf size={20} className="mr-2 text-farming-green" />
        Disease Detection
      </h2>
      <Link 
        to="/scanner"
        className="relative block rounded-xl overflow-hidden shadow-md bg-gradient-to-r from-farming-green to-farming-green-dark text-white h-32"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative h-full flex flex-col items-center justify-center">
          <Camera size={40} className="mb-2 animate-pulse-gentle" />
          <p className="font-medium">Scan Your Crops</p>
          <p className="text-xs opacity-90">Tap to open camera</p>
        </div>
      </Link>
    </div>
  );
};

export default DiseaseScanner;
