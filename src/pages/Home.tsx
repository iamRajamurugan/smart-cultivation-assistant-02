
import PageContainer from "@/components/layout/PageContainer";
import WelcomeHeader from "@/components/dashboard/WelcomeHeader";
import WeatherCard from "@/components/dashboard/WeatherCard";
import DiseaseScanner from "@/components/dashboard/DiseaseScanner";
import VoiceAssistantPanel from "@/components/voiceassistant/VoiceAssistantPanel";
import FloatingActionButton from "@/components/common/FloatingActionButton";

const Home = () => {
  return (
    <PageContainer>
      <WelcomeHeader />
      
      <div className="mt-4 mx-4">
        <WeatherCard />
      </div>
      
      <div className="mx-4 mt-6">
        <VoiceAssistantPanel />
      </div>
      
      <DiseaseScanner />
      
      <div className="mb-24"></div>
      
      {/* Floating buttons removed */}
      <FloatingActionButton />
    </PageContainer>
  );
};

export default Home;
