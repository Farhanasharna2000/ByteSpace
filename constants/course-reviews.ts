import type { CourseReview } from "@/types/review";

export const ratingSummary = {
  average: "4.7",
  distribution: [
    { stars: 5, count: 720 },
    { stars: 4, count: 120 },
    { stars: 3, count: 21 },
    { stars: 2, count: 12 },
    { stars: 1, count: 16 },
  ],
};

export const courseReviews: CourseReview[] = [
  { id: "purepearl", name: "PurePearl Studio", role: "UI/UX Designer", avatar: "/home/testimonials/james-l.svg", rating: 5, date: "a year ago", text: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!" },
  { id: "albert", name: "Albert Flores", role: "UI/UX Designer", avatar: "/home/testimonials/alex-b.svg", rating: 5, date: "a year ago", text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!" },
  { id: "cody", name: "Cody Fisher", role: "UI/UX Designer", avatar: "/home/testimonials/james-l.svg", rating: 5, date: "a year ago", text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process." },
  { id: "brooklyn", name: "Brooklyn Simmons", role: "UI/UX Designer", avatar: "/home/testimonials/sarah-m.svg", rating: 5, date: "a year ago", text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout." },
  { id: "sarah", name: "Sarah M.", role: "Design Student", avatar: "/home/testimonials/sarah-m.svg", rating: 4, date: "8 months ago", text: "Clear explanations and useful projects. I would love a few more advanced exercises, but this was a great foundation." },
  { id: "alex", name: "Alex B.", role: "Creative Learner", avatar: "/home/testimonials/alex-b.svg", rating: 3, date: "6 months ago", text: "The introductory material was helpful. Some topics needed more detail for the kind of projects I want to build." },
];
