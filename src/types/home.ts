export interface HeroSection {
  title: string;
  description: string;
  primaryBtnText: string;
  secondaryBtnText: string;
}

export interface Highlight {
  title: string;
  description: string;
}

export interface HighlightsSection {
  title: string;
  emoji: string;
  highlights: Highlight[];
  highlightsQuote: string;
}

export enum TestimonialRoles {
  EDUCATOR = "Education Professional",
  STUDENT = "Student",
  PARENT = "Parent",
}

export interface Testimonial {
  name: string;
  role: TestimonialRoles;
  content: string;
  details: string;
  emoji: string;
}

export interface TestimonialsSection {
  title: string;
  emoji: string;
  testimonials: Testimonial[];
}
