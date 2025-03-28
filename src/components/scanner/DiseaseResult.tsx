
import { ArrowLeft, Share2, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { Link } from "react-router-dom";
import StatusBadge from "../ui/StatusBadge";

interface DiseaseResultProps {
  diseaseName?: string;
  severity?: "healthy" | "mild" | "severe";
  imageUrl?: string;
  symptoms?: string[];
  treatment?: string;
}

const DiseaseResult = ({
  diseaseName = "Bacterial Leaf Blight",
  severity = "mild",
  imageUrl = "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
  symptoms = [
    "Yellow to white lesions along the leaf veins",
    "Lesions turn yellow to white as they develop",
    "Wilting of leaves in severe cases",
  ],
  treatment = "Apply copper-based bactericides early in the season when symptoms first appear. Ensure good field drainage and avoid overhead irrigation."
}: DiseaseResultProps) => {
  const getIcon = () => {
    switch (severity) {
      case "healthy":
        return <CheckCircle size={22} className="text-status-healthy" />;
      case "mild":
        return <AlertTriangle size={22} className="text-status-mild" />;
      case "severe":
        return <AlertTriangle size={22} className="text-status-severe" />;
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-farming-green text-white p-4 flex items-center justify-between">
        <Link to="/scanner" className="flex items-center">
          <ArrowLeft size={20} className="mr-2" />
          <span className="font-medium">Back</span>
        </Link>
        <h1 className="text-lg font-bold">Analysis Result</h1>
        <button className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
          <Share2 size={16} />
        </button>
      </div>
      
      {/* Image and status */}
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={diseaseName} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
          <StatusBadge status={severity} className="mb-1" />
          <h2 className="text-white font-bold text-xl">{diseaseName}</h2>
        </div>
      </div>
      
      {/* Details */}
      <div className="p-4">
        <div className="flex mb-4 bg-gray-50 rounded-lg p-3">
          {getIcon()}
          <div className="ml-3">
            <h3 className="font-semibold">Detection Confidence</h3>
            <p className="text-sm text-gray-600">
              {severity === "healthy" 
                ? "No disease detected. Your plant appears healthy." 
                : `The AI has detected ${severity === "severe" ? "significant" : "mild"} symptoms of ${diseaseName}.`
              }
            </p>
          </div>
        </div>
        
        {severity !== "healthy" && (
          <>
            <div className="mb-4">
              <h3 className="font-semibold mb-2 flex items-center">
                <Info size={18} className="mr-2 text-farming-sky" />
                Symptoms
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                {symptoms.map((symptom, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-farming-gold mt-1.5 mr-2"></span>
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="font-semibold mb-2 flex items-center">
                <CheckCircle size={18} className="mr-2 text-farming-green" />
                Recommended Treatment
              </h3>
              <p className="text-sm text-gray-700">{treatment}</p>
            </div>
            
            <div className="mt-6">
              <button className="w-full bg-farming-green text-white py-3 rounded-lg font-medium shadow-md">
                Get Expert Advice
              </button>
              <button className="w-full mt-3 border border-farming-green text-farming-green py-3 rounded-lg font-medium">
                Save to History
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DiseaseResult;
