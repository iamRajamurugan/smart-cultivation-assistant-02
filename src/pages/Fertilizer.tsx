
import { useState } from "react";
import { Search, Leaf, Droplets, ArrowRight } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import FertilizerRecommendation from "@/components/fertilizer/FertilizerRecommendation";

const Fertilizer = () => {
  const [selectedDisease, setSelectedDisease] = useState("Bacterial Leaf Blight");
  
  const diseases = [
    { id: 1, name: "Bacterial Leaf Blight" },
    { id: 2, name: "Blast" },
    { id: 3, name: "Brown Spot" },
    { id: 4, name: "Leaf Scald" },
    { id: 5, name: "Sheath Blight" },
  ];
  
  return (
    <PageContainer>
      <div className="bg-farming-green text-white p-4 pt-8">
        <h1 className="text-xl font-bold mb-2">Fertilizer Recommendations</h1>
        <p className="text-sm opacity-90">
          Smart solutions for healthier crops
        </p>
        
        <div className="mt-4 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            className="bg-white/10 w-full pl-10 pr-4 py-2 rounded-lg text-white placeholder-white/70 outline-none border border-white/20"
            placeholder="Search diseases..."
          />
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold flex items-center">
            <Leaf size={20} className="mr-2 text-farming-green" />
            Select Disease
          </h2>
          <button className="flex items-center text-sm text-gray-600">
            <Droplets size={16} className="mr-1" />
            All Solutions
          </button>
        </div>
        
        <div className="flex overflow-x-auto pb-2 -mx-1 hide-scrollbar">
          {diseases.map((disease) => (
            <button
              key={disease.id}
              onClick={() => setSelectedDisease(disease.name)}
              className={`flex-shrink-0 mx-1 px-4 py-2 rounded-full text-sm font-medium ${
                selectedDisease === disease.name
                  ? "bg-farming-green text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {disease.name}
            </button>
          ))}
        </div>
        
        <div className="mt-4">
          <FertilizerRecommendation diseaseName={selectedDisease} />
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-3 flex items-center">
            <Droplets size={20} className="mr-2 text-farming-green" />
            Additional Treatments
          </h3>
          
          <div className="space-y-3">
            {[
              { name: "Organic Solution Guide", description: "Natural remedies for plant care", icon: "🌱" },
              { name: "Crop Rotation Strategy", description: "Prevent disease recurrence", icon: "🔄" },
              { name: "Water Management Tips", description: "Optimal irrigation practices", icon: "💧" },
            ].map((treatment, index) => (
              <div key={index} className="premium-card flex justify-between items-center">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-farming-green/10 flex items-center justify-center mr-3">
                    <span className="text-xl">{treatment.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{treatment.name}</h4>
                    <p className="text-xs text-gray-500">{treatment.description}</p>
                  </div>
                </div>
                <ArrowRight size={18} className="text-farming-green" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Fertilizer;
