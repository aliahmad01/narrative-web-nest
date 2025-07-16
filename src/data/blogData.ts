export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  coverImage: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the cutting-edge technologies and methodologies that are shaping the future of web development, from AI integration to next-generation frameworks.",
    content: `
# The Future of Web Development: Trends to Watch in 2024

The web development landscape is constantly evolving, and 2024 promises to be a year of significant transformation. As we navigate through an era of rapid technological advancement, several key trends are emerging that will shape how we build and interact with web applications.

## AI-Powered Development Tools

Artificial Intelligence is revolutionizing the way we write code. From intelligent code completion to automated testing, AI tools are becoming indispensable for modern developers. These tools not only increase productivity but also help reduce bugs and improve code quality.

## The Rise of Micro-Frontends

As applications grow in complexity, the micro-frontend architecture is gaining popularity. This approach allows teams to develop, test, and deploy frontend components independently, leading to better scalability and maintainability.

## WebAssembly Goes Mainstream

WebAssembly (WASM) is finally reaching mainstream adoption, enabling high-performance applications to run in the browser. This technology is particularly exciting for computationally intensive applications like games, CAD tools, and video editing software.

## Enhanced Developer Experience

The focus on developer experience continues to intensify, with new tools and frameworks prioritizing ease of use, fast refresh times, and intuitive APIs. This trend is making web development more accessible to newcomers while increasing productivity for experienced developers.

## Conclusion

The future of web development is bright, with exciting technologies on the horizon that will continue to push the boundaries of what's possible on the web. Staying informed about these trends will be crucial for developers looking to remain competitive in this rapidly evolving field.
    `,
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b372?w=150&h=150&fit=crop&crop=face",
      bio: "Senior Frontend Developer with 8+ years of experience in modern web technologies."
    },
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    category: "Technology",
    tags: ["Web Development", "AI", "Frontend", "Trends"],
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop"
  },
  {
    id: "2",
    title: "Building Scalable React Applications with TypeScript",
    excerpt: "Learn how to leverage TypeScript's powerful type system to build more robust and maintainable React applications at scale.",
    content: `
# Building Scalable React Applications with TypeScript

TypeScript has become the go-to choice for building large-scale React applications. Its static type system provides numerous benefits that become increasingly valuable as your application grows.

## Why TypeScript Matters

Type safety isn't just about catching bugs—it's about creating a better development experience. With TypeScript, you get excellent IDE support, better refactoring capabilities, and self-documenting code.

## Best Practices for React + TypeScript

### Proper Component Typing
Always type your props interfaces properly and use generic components when necessary.

### State Management
Leverage TypeScript's type inference with modern state management solutions like Zustand or Redux Toolkit.

### API Integration
Use TypeScript to define your API contracts and ensure type safety throughout your data flow.

## Advanced Patterns

Explore advanced TypeScript patterns like conditional types, mapped types, and utility types to create more flexible and reusable components.

## Conclusion

TypeScript and React make a powerful combination for building scalable applications. The initial learning curve is worth the long-term benefits in code quality and developer productivity.
    `,
    author: {
      name: "Marcus Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      bio: "Full-stack developer specializing in React and Node.js ecosystems."
    },
    publishedAt: "2024-01-12",
    readTime: "12 min read",
    category: "Development",
    tags: ["React", "TypeScript", "JavaScript", "Frontend"],
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop"
  },
  {
    id: "3",
    title: "The Art of CSS Grid: Creating Complex Layouts with Ease",
    excerpt: "Master CSS Grid to create sophisticated, responsive layouts that were once impossible or required complex workarounds.",
    content: `
# The Art of CSS Grid: Creating Complex Layouts with Ease

CSS Grid has revolutionized the way we think about web layouts. Unlike traditional layout methods, Grid provides a two-dimensional layout system that makes complex designs simple and intuitive.

## Understanding the Grid Container

The foundation of CSS Grid is the grid container. By setting \`display: grid\`, you transform an element into a grid container, and its children become grid items.

## Defining Grid Structure

Use \`grid-template-columns\` and \`grid-template-rows\` to define the structure of your grid. The \`fr\` unit is particularly powerful for creating flexible layouts.

## Positioning Grid Items

Grid items can be positioned using line numbers, named lines, or area names. This flexibility allows for complex layouts with minimal code.

## Responsive Grid Design

CSS Grid excels at responsive design. Use \`auto-fit\` and \`auto-fill\` with \`minmax()\` to create layouts that adapt to different screen sizes automatically.

## Real-World Examples

From magazine-style layouts to dashboard interfaces, CSS Grid can handle virtually any layout challenge with elegance and simplicity.

## Conclusion

CSS Grid is not just another layout tool—it's a paradigm shift that empowers developers to create the layouts they envision without compromise.
    `,
    author: {
      name: "Emily Watson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      bio: "CSS specialist and design systems architect with a passion for beautiful, functional interfaces."
    },
    publishedAt: "2024-01-10",
    readTime: "10 min read",
    category: "Design",
    tags: ["CSS", "Grid", "Layout", "Responsive Design"],
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=400&fit=crop"
  },
  {
    id: "4",
    title: "Performance Optimization: Making Your Web Apps Lightning Fast",
    excerpt: "Discover proven techniques and modern tools to optimize your web application's performance and deliver exceptional user experiences.",
    content: `
# Performance Optimization: Making Your Web Apps Lightning Fast

Performance is not just a technical concern—it's a user experience imperative. Slow websites lose users, hurt SEO rankings, and impact business metrics. Let's explore how to make your web applications truly fast.

## Core Web Vitals

Understanding and optimizing for Core Web Vitals (LCP, FID, CLS) is crucial for modern web development. These metrics directly impact user experience and search rankings.

## Bundle Optimization

### Code Splitting
Implement dynamic imports and route-based code splitting to reduce initial bundle size.

### Tree Shaking
Eliminate dead code from your bundles using modern build tools like Webpack, Vite, or Rollup.

### Compression
Use Gzip or Brotli compression to reduce file sizes over the network.

## Runtime Performance

### Virtual DOM Optimization
Understand how virtual DOM works and avoid common pitfalls that cause unnecessary re-renders.

### Memory Management
Prevent memory leaks by properly cleaning up event listeners, subscriptions, and DOM references.

## Network Optimization

### Caching Strategies
Implement effective caching strategies using HTTP headers, service workers, and CDNs.

### Resource Loading
Optimize resource loading with preloading, prefetching, and lazy loading techniques.

## Monitoring and Measurement

Use tools like Lighthouse, WebPageTest, and Chrome DevTools to continuously monitor and improve performance.

## Conclusion

Performance optimization is an ongoing process, not a one-time task. By implementing these strategies and maintaining a performance-first mindset, you can create web applications that delight users with their speed and responsiveness.
    `,
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      bio: "Performance engineer focused on optimizing web applications for maximum speed and efficiency."
    },
    publishedAt: "2024-01-08",
    readTime: "15 min read",
    category: "Performance",
    tags: ["Performance", "Optimization", "Web Vitals", "Speed"],
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
  },
  {
    id: "5",
    title: "Design Systems: Creating Consistency at Scale",
    excerpt: "Learn how to build and maintain design systems that enable teams to create consistent, accessible, and scalable user interfaces.",
    content: `
# Design Systems: Creating Consistency at Scale

A well-crafted design system is the backbone of consistent user experiences across large applications and multiple products. It's more than just a style guide—it's a living, breathing ecosystem of components, patterns, and principles.

## The Foundation: Design Tokens

Design tokens are the atomic elements of your design system. They define colors, typography, spacing, and other visual properties in a technology-agnostic way.

## Component Library

### Atomic Design Principles
Build your component library using atomic design methodology: atoms, molecules, organisms, templates, and pages.

### Documentation
Comprehensive documentation is crucial. Tools like Storybook make it easy to document components with interactive examples.

## Accessibility First

Build accessibility into your design system from the ground up. This ensures that all products using the system are inclusive by default.

## Governance and Adoption

### Team Structure
Establish clear ownership and governance models for your design system.

### Adoption Strategies
Create migration guides and provide support to ensure successful adoption across teams.

## Scaling Challenges

### Version Management
Implement proper versioning and change management processes to handle updates gracefully.

### Cross-Platform Consistency
Ensure consistency across web, mobile, and other platforms while respecting platform conventions.

## Tools and Workflow

Modern design systems leverage tools like Figma for design, Storybook for documentation, and automated testing for quality assurance.

## Conclusion

A successful design system requires investment, planning, and ongoing maintenance, but the benefits—consistency, efficiency, and quality—make it worthwhile for any organization building digital products at scale.
    `,
    author: {
      name: "Alexandra Foster",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      bio: "Design systems lead with expertise in creating scalable, accessible design frameworks for large organizations."
    },
    publishedAt: "2024-01-05",
    readTime: "11 min read",
    category: "Design",
    tags: ["Design Systems", "UI/UX", "Accessibility", "Components"],
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=400&fit=crop"
  }
];

export const categories = [
  "All",
  "Technology", 
  "Development", 
  "Design", 
  "Performance"
];

export const getFeaturedPosts = () => blogPosts.filter(post => post.featured);
export const getPostsByCategory = (category: string) => 
  category === "All" ? blogPosts : blogPosts.filter(post => post.category === category);
export const getPostById = (id: string) => blogPosts.find(post => post.id === id);