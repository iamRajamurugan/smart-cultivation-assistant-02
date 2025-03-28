
import { Map, AlertTriangle, Navigation, Layers } from "lucide-react";

const DiseaseMap = () => {
  return (
    <div className="relative w-full h-[500px] bg-gray-100 rounded-lg overflow-hidden">
      {/* This would be replaced with a real interactive map in production */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Map size={48} className="text-gray-400 mb-2" />
        <p className="text-sm text-gray-500">
          Interactive map would appear here
        </p>
        <p className="text-xs text-gray-400">
          (Map service integration required)
        </p>
      </div>
      
      {/* Map controls overlay */}
      <div className="absolute top-4 right-4 space-y-2">
        <button className="h-10 w-10 bg-white rounded-full shadow flex items-center justify-center">
          <Navigation size={18} className="text-farming-green" />
        </button>
        <button className="h-10 w-10 bg-white rounded-full shadow flex items-center justify-center">
          <Layers size={18} className="text-gray-700" />
        </button>
      </div>
      
      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow">
        <h4 className="text-sm font-semibold flex items-center mb-2">
          <AlertTriangle size={16} className="mr-1.5 text-status-severe" />
          Disease Outbreak Reports
        </h4>
        <div className="space-y-1.5">
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-status-severe mr-2"></span>
            <span className="text-xs">Severe (10+ reports)</span>
          </div>
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-status-mild mr-2"></span>
            <span className="text-xs">Moderate (3-9 reports)</span>
          </div>
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-status-healthy mr-2"></span>
            <span className="text-xs">Low (1-2 reports)</span>
          </div>
        </div>
      </div>
      
      {/* Disease report button */}
      <div className="absolute bottom-4 right-4">
        <button className="farming-btn py-2 px-4 flex items-center">
          <AlertTriangle size={16} className="mr-1.5" />
          <span className="text-sm font-medium">Report Disease</span>
        </button>
      </div>
    </div>
  );
};

export default DiseaseMap;
