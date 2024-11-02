export interface TeachingJourney {
  emoji: string;
  text: string;
}

export interface AboutSection {
  title: string;
  emoji: string;
  details: string;
  funFact: string;
  teachingJourney: TeachingJourney[];
}