export interface ProductItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  features: string[];
  profiles: string[];
  specifications: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
  actionText: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  location: string;
  rating: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'windows' | 'facades' | 'doors' | 'partitions';
  location: string;
  image: string;
  scope: string;
  completionYear: string;
}

export interface BlogPostItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  commentsCount: number;
  image: string;
}
