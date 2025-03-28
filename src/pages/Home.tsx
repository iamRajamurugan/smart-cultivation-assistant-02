
import { useState } from "react";
import PageContainer from "@/components/layout/PageContainer";
import WelcomeHeader from "@/components/dashboard/WelcomeHeader";
import WeatherCard from "@/components/dashboard/WeatherCard";
import DiseaseScanner from "@/components/dashboard/DiseaseScanner";
import CropPricesList from "@/components/dashboard/CropPricesList";
import AIAssistant from "@/components/assistant/AIAssistant";
import { MessageCircle } from "lucide-react";

const Home = () => {
  const [assistantOpen, setAssistantOpen] = useState(false);

  return (
    <PageContainer>
      <WelcomeHeader />
      
      <div className="mt-4 mx-4">
        <WeatherCard />
      </div>
      
      <DiseaseScanner />
      
      <CropPricesList />
      
      <div className="mb-20"></div>
      
      {/* Floating AI assistant button */}
      <button
        onClick={() => setAssistantOpen(true)}
        className="fixed bottom-20 right-4 h-14 w-14 rounded-full bg-farming-gold text-farming-green-dark shadow-lg flex items-center justify-center z-10"
      >
        <MessageCircle size={24} />
      </button>
      
      <AIAssistant 
        isOpen={assistantOpen} 
        onClose={() => setAssistantOpen(false)} 
      />
    </PageContainer>
  );
};

export default Home;
