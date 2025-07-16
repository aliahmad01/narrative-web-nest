import { Link } from "react-router-dom";
import { BlogPost } from "../data/blogData";
import { Calendar, Clock, User, ArrowUpRight } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "featured";
}

export const BlogCard = ({ post, variant = "default" }: BlogCardProps) => {
  if (variant === "featured") {
    return (
      <Link to={`/post/${post.id}`} className="group block">
        <article className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative overflow-hidden order-2 md:order-1">
              <img 
                src={post.coverImage}
                alt={post.title}
                className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
            </div>
            
            <div className="p-8 md:p-12 flex flex-col justify-center order-1 md:order-2">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                {post.excerpt}
              </p>
              
              <div className="flex items-center text-primary font-medium group-hover:gap-3 transition-all">
                <span>Read More</span>
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link to={`/post/${post.id}`} className="group block">
      <article className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
        <div className="relative overflow-hidden">
          <img 
            src={post.coverImage}
            alt={post.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1.5 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <h3 className="text-lg font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed mb-4">
            {post.excerpt}
          </p>
          
          <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
            <span>Read More</span>
            <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;