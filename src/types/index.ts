export interface Partner { name: string; logo: string }
export interface Stat { value: string; label: string }

export interface Course {
  id: string;
  title: string;
  studio: string;
  level: string;
  rating: number;
  price: string;
  lessons: number;
  duration: string;
  comments: number;
  learners: string;
  image: string;
  categories: string[];
}

export type CategoryIconName = "design" | "development" | "it" | "business" | "marketing" | "photography";

export interface Category {
  id: string;
  label: string;
  icon: CategoryIconName;
}


export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}


export interface FooterLink {
  label: string;
  href: string;
}

export interface Lesson { title: string; duration: string }

export interface Module { title: string; description: string }

export interface CourseDetail extends Course {
  subtitle: string;
  reviews: number;
  students: number;
  totalLessons: number;
  totalHours: number;
   ratingCounts: number[]; // index 0 = 5 star, index 4 = 1 star
  reviewList: Review[];
  lessonList: Lesson[];
  modules: Module[];
  lessonIntro: string;
  lessonContent: string;
  progressIntro: string;
  description: string[];
  poster: string;
  video?: string;
  sneakPeek: string[];
  keyPoints: string[];
  includes: { label: string; icon: "book" | "video" | "award" | "chat" }[];
  creator: { name: string; role: string; avatar: string; bio: string };
}

export interface Review {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  time: string;
  comment: string;
}

export interface Creator {
  slug: string;
  name: string;
  tagline: string;
  bio: string[];
  avatar: string;
  followers: number;
}