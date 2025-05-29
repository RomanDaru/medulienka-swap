import { useState, useEffect } from "react";

interface UpcomingEvent {
  isActive: boolean;
  posterImageUrl: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

interface Photo {
  id: string;
  src: string;
  alt: string;
}

interface Content {
  upcomingEvent: UpcomingEvent;
  gallery: {
    photos: Photo[];
  };
}

export const useContent = () => {
  const [content, setContent] = useState<Content | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch("/content/config.json");
        if (!response.ok) {
          throw new Error("Failed to load content");
        }
        const data = await response.json();
        setContent(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  return { content, loading, error };
};
