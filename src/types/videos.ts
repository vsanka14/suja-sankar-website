interface Video {
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  duration: string;
}

interface VideosSection {
  title: string;
  emoji: string;
  videos: Video[];
}
