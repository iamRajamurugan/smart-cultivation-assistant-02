
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const CommunityPostForm = ({ onPostAdded }: { onPostAdded: (post: any) => void }) => {
  const [content, setContent] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim()) {
      toast({
        description: "Please add some text to your post",
        variant: "destructive"
      });
      return;
    }
    
    // Create new post
    const newPost = {
      id: Date.now(),
      author: "You",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      timeAgo: "Just now",
      content,
      imageUrl: imagePreview,
      likes: 0,
      comments: 0,
      isLiked: false,
    };
    
    onPostAdded(newPost);
    setContent("");
    setImagePreview(null);
    
    toast({
      description: "Your post has been shared!",
    });
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-4 mb-4">
      <h2 className="font-semibold mb-2">Share with the community</h2>
      
      <Textarea 
        placeholder="What's happening with your crops today?" 
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="min-h-[80px] mb-3"
      />
      
      {imagePreview && (
        <div className="relative mb-3">
          <img 
            src={imagePreview} 
            alt="Preview" 
            className="w-full h-auto rounded-lg"
          />
          <button
            type="button"
            onClick={() => setImagePreview(null)}
            className="absolute top-2 right-2 bg-black/70 text-white p-1 rounded-full"
          >
            ✕
          </button>
        </div>
      )}
      
      <div className="flex justify-between">
        <label className="cursor-pointer text-farming-green flex items-center">
          <Camera size={20} />
          <span className="ml-1 text-sm">Add photo</span>
          <input 
            type="file" 
            accept="image/*" 
            className="hidden" 
            onChange={handleImageChange}
          />
        </label>
        
        <Button type="submit" className="bg-farming-green hover:bg-farming-green-dark">
          <Send size={18} className="mr-1" />
          Post
        </Button>
      </div>
    </form>
  );
};

export default CommunityPostForm;
