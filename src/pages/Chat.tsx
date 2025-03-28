
import React from "react";
import PageContainer from "@/components/layout/PageContainer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Chat = () => {
  const [messages, setMessages] = React.useState([
    { id: 1, text: "Hello! I'm your farming assistant. How can I help you today?", isUser: false },
  ]);
  const [input, setInput] = React.useState("");
  
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (input.trim()) {
      // Add user message
      setMessages([...messages, { id: Date.now(), text: input, isUser: true }]);
      setInput("");
      
      // Simulate AI response after a slight delay
      setTimeout(() => {
        setMessages(prev => [
          ...prev, 
          { 
            id: Date.now(), 
            text: "Thanks for your message. Our AI assistant is analyzing your query and will respond shortly.", 
            isUser: false 
          }
        ]);
      }, 1000);
    }
  };
  
  return (
    <PageContainer className="flex flex-col h-screen">
      <div className="bg-farming-green p-4 flex items-center text-white">
        <Link to="/" className="mr-2">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-xl font-bold">Chat with Assistant</h1>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
          >
            <div 
              className={`max-w-[80%] p-3 rounded-lg ${
                message.isUser 
                  ? "bg-farming-green text-white rounded-tr-none" 
                  : "bg-gray-100 text-gray-800 rounded-tl-none"
              }`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSend} className="p-4 border-t flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1"
        />
        <Button 
          type="submit" 
          className="bg-farming-green hover:bg-farming-green-dark"
          disabled={!input.trim()}
        >
          <Send size={18} />
        </Button>
      </form>
    </PageContainer>
  );
};

export default Chat;
