import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-8 leading-tight">
            Stories that{" "}
            <span className="text-primary italic">inspire</span>{" "}
            and{" "}
            <span className="text-primary italic">inform</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
            Discover thoughtful perspectives on technology, design, lifestyle, and the world around us. 
            Each story crafted to spark curiosity and meaningful conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 py-3 rounded-lg"
            >
              Start Reading
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-border text-foreground hover:bg-secondary font-medium px-8 py-3 rounded-lg"
            >
              Browse Categories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;