import { Link } from "react-router-dom";
import { Clock, User } from "lucide-react";
import { BlogPost } from "@/data/blogData";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  return (
    <article className={`group cursor-pointer ${featured ? "md:col-span-2" : ""}`}>
      <Link to={`/post/${post.id}`} className="block">
        <div className="overflow-hidden rounded-lg bg-card shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
          {/* Cover Image */}
          <div className={`relative overflow-hidden ${featured ? "h-64" : "h-48"}`}>
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Category and Read Time */}
            <div className="flex items-center justify-between mb-3">
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                {post.category}
              </Badge>
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="w-3 h-3 mr-1" />
                {post.readTime}
              </div>
            </div>

            {/* Title */}
            <h3 className={`font-semibold text-card-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2 ${
              featured ? "text-xl" : "text-lg"
            }`}>
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
              {post.excerpt}
            </p>

            {/* Author and Date */}
            <div className="flex items-center space-x-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <div className="flex items-center text-xs text-muted-foreground">
                  <User className="w-3 h-3 mr-1" />
                  {post.author.name}
                </div>
                <time className="text-xs text-muted-foreground">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;