
import { Card } from "@/components/ui/card";
import { Info, Droplet, ArrowUpRight, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

interface FertilizerRecommendationProps {
  diseaseName: string;
}

const FertilizerRecommendation = ({ diseaseName }: FertilizerRecommendationProps) => {
  // Sample data - in a real app this would come from an API call based on the disease
  const diseaseInfo = {
    "Bacterial Leaf Blight": {
      description: "Bacterial Leaf Blight is a serious rice disease caused by Xanthomonas oryzae that leads to wilting and yellowing of leaves.",
      severity: "moderate",
      fertilizers: [
        {
          name: "Copper Oxychloride",
          usage: "Apply 2.5g/liter of water as a foliar spray",
          effectiveness: 85,
          organic: false,
        },
        {
          name: "Bio-Fertilizer Mix",
          usage: "Apply 5kg/acre in well-irrigated conditions",
          effectiveness: 75,
          organic: true,
        },
        {
          name: "Potassium Supplement",
          usage: "Apply 15kg/acre before flowering stage",
          effectiveness: 65,
          organic: false,
        }
      ]
    },
    "Blast": {
      description: "Rice blast is a fungal disease that affects the leaves, stems, and panicles with diamond-shaped lesions.",
      severity: "severe",
      fertilizers: [
        {
          name: "Tricyclazole",
          usage: "Apply 6ml/10 liters of water",
          effectiveness: 90,
          organic: false,
        },
        {
          name: "Neem Oil Solution",
          usage: "Apply 5ml/liter of water weekly",
          effectiveness: 70,
          organic: true,
        }
      ]
    },
    "Brown Spot": {
      description: "Brown spot is a fungal disease causing oval brown lesions on leaves. Often related to nutrient deficiency.",
      severity: "mild",
      fertilizers: [
        {
          name: "Mancozeb",
          usage: "Apply 2.5g/liter as preventive spray",
          effectiveness: 80,
          organic: false,
        },
        {
          name: "Organic Compost Tea",
          usage: "Apply as soil drench weekly",
          effectiveness: 65,
          organic: true,
        }
      ]
    },
    "Leaf Scald": {
      description: "Leaf scald appears as long, yellow-orange lesions with brownish margins, usually on older leaves.",
      severity: "moderate",
      fertilizers: [
        {
          name: "Propiconazole",
          usage: "Apply 1ml/liter of water",
          effectiveness: 85,
          organic: false,
        },
        {
          name: "Sulfur Powder",
          usage: "Dust 20kg/hectare during early morning",
          effectiveness: 70,
          organic: true,
        }
      ]
    },
    "Sheath Blight": {
      description: "Sheath blight appears as oval lesions on leaf sheaths with gray-white centers and brown margins.",
      severity: "severe",
      fertilizers: [
        {
          name: "Hexaconazole",
          usage: "Apply 2ml/liter of water",
          effectiveness: 90,
          organic: false,
        },
        {
          name: "Trichoderma Solution",
          usage: "Apply 5g/liter as soil treatment",
          effectiveness: 75,
          organic: true,
        }
      ]
    }
  };

  const currentDisease = diseaseInfo[diseaseName as keyof typeof diseaseInfo] || diseaseInfo["Bacterial Leaf Blight"];
  
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "mild": return "text-yellow-500";
      case "moderate": return "text-orange-500";
      case "severe": return "text-red-500";
      default: return "text-yellow-500";
    }
  };

  const getEffectivenessClass = (effectiveness: number) => {
    if (effectiveness >= 85) return "bg-green-500";
    if (effectiveness >= 70) return "bg-yellow-500";
    return "bg-orange-500";
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="mb-4">
        <div className="flex items-start">
          <AlertTriangle className={`mr-2 mt-1 ${getSeverityColor(currentDisease.severity)}`} size={20} />
          <div>
            <h3 className="font-bold text-lg mb-1">{diseaseName}</h3>
            <p className="text-sm text-gray-600">{currentDisease.description}</p>
          </div>
        </div>
        
        <div className="mt-3 p-3 bg-farming-green/5 rounded-lg border border-farming-green/10">
          <h4 className="font-medium text-farming-green flex items-center">
            <Info size={16} className="mr-2" />
            Recommended Solutions
          </h4>
        </div>
      </div>
      
      <div className="space-y-3 mt-4">
        {currentDisease.fertilizers.map((fertilizer, index) => (
          <Card key={index} className="p-3 border border-gray-100">
            <div className="flex justify-between items-start">
              <div className="flex items-start">
                <div className={`h-10 w-10 rounded-full ${fertilizer.organic ? 'bg-farming-green/10' : 'bg-farming-sky/10'} flex items-center justify-center mr-3`}>
                  <Droplet size={20} className={fertilizer.organic ? 'text-farming-green' : 'text-farming-sky'} />
                </div>
                <div>
                  <div className="flex items-center">
                    <h4 className="font-semibold">{fertilizer.name}</h4>
                    {fertilizer.organic && (
                      <span className="ml-2 text-xs bg-farming-green/10 text-farming-green px-2 py-0.5 rounded-full">
                        Organic
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{fertilizer.usage}</p>
                  
                  <div className="mt-2 flex items-center">
                    <div className="text-xs mr-2">Effectiveness:</div>
                    <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${getEffectivenessClass(fertilizer.effectiveness)}`}
                        style={{width: `${fertilizer.effectiveness}%`}}
                      ></div>
                    </div>
                    <div className="text-xs ml-2 font-medium">{fertilizer.effectiveness}%</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <Link to="/expert-advice" className="mt-4 w-full bg-farming-green text-white py-3 rounded-lg font-medium shadow-md flex items-center justify-center">
        Get Expert Advice
        <ArrowUpRight size={16} className="ml-1" />
      </Link>

      <div className="mt-4 bg-farming-gold/10 rounded-lg p-3">
        <p className="text-sm font-medium text-farming-gold-dark flex items-center">
          <Info size={16} className="mr-2" />
          Always follow proper safety guidelines when applying fertilizers
        </p>
      </div>
    </div>
  );
};

export default FertilizerRecommendation;
