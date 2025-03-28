
import { useState } from "react";
import { Mic, MicOff, Volume2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const VoiceAssistantPanel = () => {
  const [isListening, setIsListening] = useState(false);
  const [lastCommand, setLastCommand] = useState("");
  
  const toggleListening = () => {
    setIsListening(!isListening);
    
    // Simulate voice recognition (would be replaced with actual implementation)
    if (!isListening) {
      setTimeout(() => {
        setLastCommand("Show me disease detection");
        setIsListening(false);
      }, 3000);
    }
  };
  
  return (
    <Card className="mb-6 overflow-hidden gradient-card border-0">
      <CardContent className="p-4">
        <div className="flex items-start">
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2 flex items-center">
              <Volume2 size={20} className="mr-2 text-farming-green" />
              Voice Assistant
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              {isListening 
                ? "Listening to your command..." 
                : "Tap the microphone and speak to navigate"}
            </p>
            
            {lastCommand && (
              <div className="bg-gray-100 p-2 rounded-lg text-sm mb-2">
                <p className="font-medium">I heard: "{lastCommand}"</p>
              </div>
            )}
            
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="text-xs bg-farming-green/10 text-farming-green px-2 py-1 rounded-full">
                "Open scanner"
              </span>
              <span className="text-xs bg-farming-green/10 text-farming-green px-2 py-1 rounded-full">
                "Check weather"
              </span>
              <span className="text-xs bg-farming-green/10 text-farming-green px-2 py-1 rounded-full">
                "Show prices"
              </span>
            </div>
          </div>
          
          <button 
            onClick={toggleListening}
            className={`h-16 w-16 rounded-full flex items-center justify-center shadow-lg ml-2 ${
              isListening
                ? "bg-status-severe text-white animate-pulse"
                : "bg-farming-green text-white glow-effect"
            }`}
          >
            {isListening ? <MicOff size={28} /> : <Mic size={28} />}
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VoiceAssistantPanel;
