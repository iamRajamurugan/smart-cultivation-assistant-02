
import { MessageSquare, Heart, Share2, MoreVertical } from "lucide-react";
import CommentSection from "./CommentSection";

interface Comment {
  id: number;
  author: string;
  authorAvatar: string;
  content: string;
  timeAgo: string;
}

interface Post {
  id: number;
  author: string;
  authorAvatar: string;
  timeAgo: string;
  content: string;
  imageUrl?: string;
  likes: number;
  comments: number;
  isLiked?: boolean;
  commentsList?: Comment[];
}

interface CommunityPostProps {
  post: Post;
  onLikeToggle: () => void;
  onCommentAdded: (comment: Comment) => void;
}

const CommunityPost = ({
  post,
  onLikeToggle,
  onCommentAdded
}: CommunityPostProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm mb-4 overflow-hidden">
      {/* Post header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
            <img 
              src={post.authorAvatar} 
              alt={post.author} 
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold">{post.author}</h3>
            <p className="text-xs text-gray-500">{post.timeAgo}</p>
          </div>
        </div>
        <button className="h-8 w-8 rounded-full hover:bg-gray-100 flex items-center justify-center">
          <MoreVertical size={16} />
        </button>
      </div>
      
      {/* Post content */}
      <div className="px-4 pb-3">
        <p className="text-sm mb-3">{post.content}</p>
        {post.imageUrl && (
          <div className="rounded-lg overflow-hidden mb-3">
            <img 
              src={post.imageUrl} 
              alt="Post visual" 
              className="w-full h-auto"
            />
          </div>
        )}
      </div>
      
      {/* Post actions */}
      <div className="flex items-center justify-between border-t border-gray-100 px-2">
        <button 
          className={`flex items-center justify-center py-2 px-3 text-sm ${
            post.isLiked ? "text-farming-green" : "text-gray-600"
          }`}
          onClick={onLikeToggle}
        >
          <Heart 
            size={18} 
            className={`mr-1.5 ${post.isLiked ? "fill-farming-green" : ""}`} 
          />
          <span>{post.likes}</span>
        </button>
        
        <button className="flex items-center justify-center py-2 px-3 text-sm text-gray-600">
          <MessageSquare size={18} className="mr-1.5" />
          <span>{post.comments}</span>
        </button>
        
        <button className="flex items-center justify-center py-2 px-3 text-sm text-gray-600">
          <Share2 size={18} className="mr-1.5" />
          <span>Share</span>
        </button>
      </div>
      
      {/* Comments section */}
      <div className="px-4 pb-4">
        <CommentSection 
          postId={post.id}
          comments={post.commentsList || []}
          onCommentAdded={(postId, comment) => onCommentAdded(comment)}
        />
      </div>
    </div>
  );
};

export default CommunityPost;
