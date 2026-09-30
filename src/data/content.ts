import { Category, Course, CourseDetail, Creator, FooterLink, Partner, Stat, Testimonial } from "@/types";


export const partners: Partner[] = [1, 2, 3, 4, 5].map((n) => ({
  name: "Logoipsum",
  logo: `/images/partners/${n}.svg`,
}));

export const courseFilters = [
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media",
  "UI/UX Design", "Creative Marketing", "Digital Illustration", "Film & Video", "Crafts",
  "Freelance & Entrepreneurship", "Graphic Design", "Photography", "Productivity",
  "Web Development", "Data Science", "Cooking",
];

/* Design e shob card er studio, level, price ek. Tai common field ek jaygay. */
const base: Omit<Course, "id" | "title" | "image" | "categories"> = {
  studio: "purepearl studio",
  level: "Beginner",
  rating: 4.5,
  price: "$25",
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  learners: "26+",
};

export const courses: Course[] = [
  { ...base, id: "1", title: "Learn Figma from Basic", image: "/images/courses/1.jpg", categories: ["Featured", "UI/UX Design", "Web Development"] },
  { ...base, id: "2", title: "Build Digital Asset", image: "/images/courses/2.jpg", categories: ["Featured", "Graphic Design", "Digital Illustration"] },
  { ...base, id: "3", title: "the Power of Big Data", image: "/images/courses/3.jpg", categories: ["Featured", "Data Science"] },
  { ...base, id: "4", title: "Balancing Productivity and Life", image: "/images/courses/4.jpg", categories: ["Featured", "Productivity"] },
  { ...base, id: "5", title: "Mastering Money Management", image: "/images/courses/5.jpg", categories: ["Featured", "Freelance & Entrepreneurship"] },
  { ...base, id: "6", title: "From Idea to Startup Success", image: "/images/courses/6.jpg", categories: ["Featured", "Freelance & Entrepreneurship", "Marketing"] },
];


export const categories: Category[] = [
  { id: "design", label: "Design", icon: "design" },
  { id: "development", label: "Development", icon: "development" },
  { id: "it-software", label: "IT & Software", icon: "it" },
  { id: "business", label: "Business", icon: "business" },
  { id: "marketing", label: "Marketing", icon: "marketing" },
  { id: "photography", label: "Photography", icon: "photography" },
];


export const growthStats: Stat[] = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export const creatorPoints = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];



export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/testimonials/1.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    id: "2",
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/testimonials/2.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    id: "3",
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/testimonials/3.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];



export const footerColumns: FooterLink[][] = [
  [
    { label: "Featured Courses", href: "/courses" },
    { label: "Featured Categories", href: "/courses" },
    { label: "Business", href: "/courses?category=business" },
    { label: "IT", href: "/courses?category=it-software" },
    { label: "Design", href: "/courses?category=design" },
  ],
  [
    { label: "Development", href: "/courses?category=development" },
    { label: "Marketing", href: "/courses?category=marketing" },
    { label: "Photography", href: "/courses?category=photography" },
    { label: "Finance", href: "/courses?category=finance" },
    { label: "Sport", href: "/courses?category=sport" },
  ],
  [
    { label: "Become a Creator", href: "/join" },
    { label: "Affiliate Program", href: "/affiliate" },
    { label: "Contact", href: "/contact" },
    { label: "Help", href: "/help" },
    { label: "About", href: "/about" },
  ],
];

export const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Settings", href: "/cookies" },
];

const levels = ["Beginner", "Beginner", "Beginner", "Intermediate", "Advanced"];

export const catalog: Course[] = Array.from({ length: 30 }, (_, i) => ({
  ...courses[i % courses.length],
  id: String(i + 1),
  level: levels[i % levels.length],
}));


export const courseDetailBase: Omit<CourseDetail, keyof Course> = {
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  reviews: 172,
  students: 199,
  totalLessons: 112,
  totalHours: 24,
  poster: "/images/courses/video-poster.jpg",
  // video: "/videos/preview.mp4", 

    ratingCounts: [720, 120, 21, 12, 16],
  reviewList: [
    { id: "r1", name: "PurePearl Studio", role: "UI/UX Designer", avatar: "/images/reviewers/1.png", rating: 5, time: "a year ago", comment: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!" },
    { id: "r2", name: "Albert Flores", role: "UI/UX Designer", avatar: "/images/reviewers/2.png", rating: 5, time: "a year ago", comment: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!" },
    { id: "r3", name: "Cody Fisher", role: "UI/UX Designer", avatar: "/images/reviewers/3.png", rating: 5, time: "a year ago", comment: "Clear explanations and well-structured modules. The project showcase and critique sessions were especially valuable for building my portfolio." },
    { id: "r4", name: "Jenny Wilson", role: "Graphic Designer", avatar: "/images/reviewers/4.png", rating: 4, time: "2 years ago", comment: "Great content overall. I would have liked a few more examples in the advanced techniques module, but the core lessons were solid." },
    { id: "r5", name: "Cameron Williamson", role: "Product Designer", avatar: "/images/reviewers/5.png", rating: 4, time: "2 years ago", comment: "Practical and easy to follow. The platform optimization lessons helped me deliver assets for mobile and social much faster." },
    { id: "r6", name: "Darlene Robertson", role: "Freelancer", avatar: "/images/reviewers/6.png", rating: 3, time: "2 years ago", comment: "Good introduction, though some sections moved quickly for a beginner. Rewatching the lessons helped." },
    { id: "r7", name: "Kathryn Murphy", role: "Marketing Specialist", avatar: "/images/reviewers/7.png", rating: 2, time: "3 years ago", comment: "The material is useful, but I expected more downloadable resources and assignments." },
    { id: "r8", name: "Devon Lane", role: "Student", avatar: "/images/reviewers/8.png", rating: 1, time: "3 years ago", comment: "This course was not the right fit for my level. I needed more advanced content." },
  ],
     lessonIntro:
    "Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.",
  modules: [
    { title: "Introduction to Digital Assets", description: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation." },
    { title: "Design Principles for Impact", description: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills." },
    { title: "Advanced Techniques in Digital Creation", description: "Go beyond the basics with lessons like 'Layering and Composition' and 'Working with Vector and Raster Assets.' Build the confidence to create polished digital work." },
    { title: "User-Centric Design Strategies", description: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design." },
    { title: "Interactive Media and Engagement", description: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences." },
    { title: "Project Showcase and Critique", description: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence." },
    { title: "Optimizing Digital Assets for Various Platforms", description: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes." },
  ],
  lessonContent:
    "Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.",
  progressIntro:
    "Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.", 
  lessonList: [
    { title: "Introduction to Digital Assets", duration: "12 mins" },
    { title: "Design Principles for Impacts", duration: "21 mins" },
    { title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
    { title: "Color Theory and Typography", duration: "18 mins" },
    { title: "Layout Strategies", duration: "14 mins" },
    { title: "Project Showcase and Critique", duration: "25 mins" },
    { title: "Optimizing for Various Platforms", duration: "19 mins" },
    { title: "Monetization Strategies", duration: "17 mins" },
  ],
  description: [
    `Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "{title}: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.`,
    "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
    "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your learning, allowing you to apply these principles in practical scenarios.",
  ],
  sneakPeek: [1, 2, 3, 4].map((n) => `/images/courses/sneak/${n}.jpg`),
  keyPoints: [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ],
  includes: [
    { label: "Learning Resources", icon: "book" },
    { label: "Quality Lesson Videos", icon: "video" },
    { label: "Certificate of Completion", icon: "award" },
    { label: "Private Consultation", icon: "chat" },
  ],
  creator: {
    name: "PurePearl Studio",
    role: "Professional Creator",
    avatar: "/images/creators/purepearl.jpg",
    bio: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
  },
};


export const creators: Creator[] = [
  {
    slug: "purepearl-studio",
    name: "PurePearl Studio",
    tagline: "Passionate UI/UX, Web designer",
    avatar: "/images/creators/purepearl.jpg",
    followers: 12,
    bio: [
      "Welcome to the creative world of PurePearl Studio! Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
      "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
    ],
  },
];