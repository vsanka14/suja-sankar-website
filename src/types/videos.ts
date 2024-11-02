export interface Video {
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  duration: string;
}

export interface VideosSection {
  title: string;
  description: string;
  emoji: string;
  videos: Video[];
}
