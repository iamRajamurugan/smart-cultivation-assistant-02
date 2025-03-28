
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface Comment {
  id: number;
  author: string;
  authorAvatar: string;
  content: string;
  timeAgo: string;
}

interface CommentSectionProps {
  postId: number;
  comments: Comment[];
  onCommentAdded: (postId: number, comment: Comment) => void;
}

const CommentSection = ({ 
  postId, 
  comments, 
  onCommentAdded 
}: CommentSectionProps) => {
  const [comment, setComment] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (comment.trim()) {
      const newComment = {
        id: Date.now(),
        author: "You",
        authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        content: comment,
        timeAgo: "Just now"
      };
      
      onCommentAdded(postId, newComment);
      setComment("");
    }
  };
  
  return (
    <div className="mt-2 border-t pt-2">
      {comments.length > 0 && (
        <button 
          className="text-sm text-farming-green mb-2"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Hide comments" : `View ${comments.length} comments`}
        </button>
      )}
      
      {isExpanded && comments.map((comment) => (
        <div key={comment.id} className="flex items-start mb-3">
          <img 
            src={comment.authorAvatar} 
            alt={comment.author} 
            className="h-7 w-7 rounded-full mr-2"
          />
          <div className="bg-gray-100 rounded-lg px-3 py-2 flex-1">
            <div className="flex justify-between">
              <span className="font-medium text-sm">{comment.author}</span>
              <span className="text-xs text-gray-500">{comment.timeAgo}</span>
            </div>
            <p className="text-sm mt-1">{comment.content}</p>
          </div>
        </div>
      ))}
      
      <form onSubmit={handleSubmit} className="flex items-center mt-2">
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
          className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-farming-green"
        />
        <Button 
          type="submit" 
          size="sm" 
          className="ml-2 bg-farming-green hover:bg-farming-green-dark rounded-full h-8 w-8 p-1" 
          disabled={!comment.trim()}
        >
          <Send size={16} />
        </Button>
      </form>
    </div>
  );
};

export default CommentSection;
