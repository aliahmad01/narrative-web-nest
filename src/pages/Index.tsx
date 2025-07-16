import { useState } from "react";
import { blogPosts, categories, getFeaturedPosts, getPostsByCategory } from "@/data/blogData";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const featuredPosts = getFeaturedPosts();
  const displayedPosts = getPostsByCategory(selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Featured Story */}
        {featuredPosts.length > 0 && (
          <section className="mb-20">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Featured Story</h2>
                <p className="text-muted-foreground text-lg">
                  Our editor's pick for this week
                </p>
              </div>
            </div>
            
            <div className="mb-20">
              <BlogCard post={featuredPosts[0]} variant="featured" />
            </div>
          </section>
        )}
        
        {/* Latest Stories */}
        <section>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Latest Stories</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Stay up to date with our latest thoughts and insights
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-200 rounded-lg"
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.slice(1).map((post, index) => (
              <div key={post.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>

          {displayedPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found in this category.</p>
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;