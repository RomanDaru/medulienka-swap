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

        // Fetch gallery photos
        const galleryResponse = await client.getEntries({
          content_type: "galleryPhoto",
        });

        console.log("Gallery response:", galleryResponse);

        // Build a map of assetId -> asset
        const assetMap: Record<string, any> = {};
        if (galleryResponse.includes && galleryResponse.includes.Asset) {
          galleryResponse.includes.Asset.forEach((asset: any) => {
            assetMap[asset.sys.id] = asset;
          });
        }

        const event = eventResponse.items[0]?.fields as any;
        const photos = galleryResponse.items
          .filter(
            (item: any) =>
              Array.isArray(item.fields.image) &&
              item.fields.image[0] &&
              item.fields.image[0].sys &&
              assetMap[item.fields.image[0].sys.id]
          )
          .map((item: any) => {
            const asset = assetMap[item.fields.image[0].sys.id];
            return {
              id: item.sys.id,
              src: asset.fields.file.url.startsWith("http")
                ? asset.fields.file.url
                : `https:${asset.fields.file.url}`,
              alt: item.fields.alt || asset.fields.title || "",
            };
          });

        if (event) {
          setContent({
            upcomingEvent: {
              isActive: Boolean(event.isActive),
              posterImageUrl: event.posterImage?.fields?.file?.url || "",
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
