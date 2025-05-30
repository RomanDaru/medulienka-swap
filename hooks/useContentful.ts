import { createClient } from "contentful";
import { useState, useEffect } from "react";

// Types for our content
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

// Get environment variables
const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

// Log environment variables (without exposing the full token)
console.log("Environment check:", {
  spaceId,
  hasAccessToken: !!accessToken,
  accessTokenLength: accessToken?.length,
  accessTokenPrefix: accessToken?.substring(0, 5), // Log first 5 chars to verify format
});

// Initialize the Contentful client
const client = createClient({
  space: spaceId || "",
  accessToken: accessToken || "",
});

export const useContentful = () => {
  const [content, setContent] = useState<Content | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        console.log("Fetching content from Contentful...");
        console.log("Using space ID:", spaceId);
        console.log("Access token format check:", {
          startsWithCFPAT: accessToken?.startsWith("CFPAT-"),
          length: accessToken?.length,
        });

        // Fetch upcoming event
        const eventResponse = await client.getEntries({
          content_type: "upcomingEvent",
          limit: 1,
        });

        console.log("Event response:", eventResponse);
        const event = eventResponse.items[0]?.fields as any;
        const posterImageUrl = event?.posterImage?.fields?.file?.url || "";

        // Fetch all media assets
        const assetsResponse = await client.getAssets();

        // Filter out the upcoming event poster from the gallery photos
        const photos = assetsResponse.items
          .filter(
            (asset: any) =>
              asset.fields.file &&
              asset.fields.file.contentType.startsWith("image/") &&
              // Exclude the upcoming event poster
              asset.fields.file.url !== posterImageUrl &&
              `https:${asset.fields.file.url}` !== posterImageUrl // Check both http and https
          )
          .map((asset: any) => ({
            id: asset.sys.id,
            src: asset.fields.file.url.startsWith("http")
              ? asset.fields.file.url
              : `https:${asset.fields.file.url}`,
            alt: asset.fields.title || "",
          }));

        if (event) {
          setContent({
            upcomingEvent: {
              isActive: Boolean(event.isActive),
              posterImageUrl: posterImageUrl,
              date: String(event.date || ""),
              time: String(event.time || ""),
              location: String(event.location || ""),
              description: String(event.description || ""),
            },
            gallery: {
              photos,
            },
          });
        }
      } catch (err) {
        console.error("Error fetching content:", err);
        if (err instanceof Error) {
          console.error("Error details:", {
            name: err.name,
            message: err.message,
            stack: err.stack,
          });
        }
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  return { content, loading, error };
};
