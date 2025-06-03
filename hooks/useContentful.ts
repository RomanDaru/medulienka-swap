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

interface Poster {
  id: string;
  src: string;
  alt: string;
  title: string;
  date: string;
  description?: string;
}

interface Content {
  upcomingEvent: UpcomingEvent;
  posterCollection: {
    posters: Poster[];
  };
  gallery: {
    photos: Photo[];
  };
}

// Get environment variables
const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

// Environment validation (production-safe)
if (!spaceId || !accessToken) {
  console.error("Missing required Contentful environment variables");
}

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
        // Fetching content from Contentful

        // Fetch upcoming event
        const eventResponse = await client.getEntries({
          content_type: "upcomingEvent",
          limit: 1,
        });

        const event = eventResponse.items[0]?.fields as any;
        const posterImageUrl = event?.posterImage?.fields?.file?.url || "";

        // Fetch poster collection from Contentful first
        let posterCollection: { posters: Poster[] } = { posters: [] };
        let posterUrls: string[] = [];
        try {
          const posterResponse = await client.getEntries({
            content_type: "posterCollection",
          });

          const posters = posterResponse.items
            .map((item: any) => {
              const fields = item.fields;
              const posterAsset = fields.poster;

              // Handle date field - check if it's a Date field or text field
              let formattedDate = "";
              if (fields.datum) {
                // If it's a Date field, format it
                if (
                  fields.datum instanceof Date ||
                  typeof fields.datum === "string"
                ) {
                  try {
                    const date = new Date(fields.datum);
                    formattedDate = date.toLocaleDateString("sk-SK", {
                      year: "numeric",
                      month: "long",
                    });
                  } catch (e) {
                    // If date parsing fails, use the raw value
                    formattedDate = String(fields.datum);
                  }
                } else {
                  formattedDate = String(fields.datum);
                }
              } else {
                // Fallback to creation date if no datum field
                const createdDate = new Date(item.sys.createdAt);
                formattedDate = createdDate.toLocaleDateString("sk-SK", {
                  year: "numeric",
                  month: "long",
                });
              }

              const posterUrl = posterAsset?.fields?.file?.url
                ? posterAsset.fields.file.url.startsWith("http")
                  ? posterAsset.fields.file.url
                  : `https:${posterAsset.fields.file.url}`
                : "";

              // Collect poster URLs for filtering from gallery
              if (posterUrl) {
                posterUrls.push(posterUrl);
              }

              return {
                id: item.sys.id,
                src: posterUrl,
                alt: fields.posterName || "",
                title: fields.posterName || "",
                date: formattedDate,
                description: fields.posterDescription || "",
              };
            })
            .filter((poster: any) => poster.src); // Only include posters with valid images

          posterCollection = { posters };
        } catch (posterErr) {
          console.warn(
            "Could not load poster collection from Contentful:",
            posterErr
          );
          // Fallback to local content if Contentful fails
          try {
            const localResponse = await fetch("/content/config.json");
            if (localResponse.ok) {
              const localData = await localResponse.json();
              posterCollection = localData.posterCollection || { posters: [] };
            }
          } catch (localErr) {
            console.warn("Could not load local poster collection:", localErr);
          }
        }

        // Fetch all media assets for gallery (excluding all posters)
        const assetsResponse = await client.getAssets();

        // Filter out ALL posters (upcoming event poster + poster collection posters) from gallery
        const photos = assetsResponse.items
          .filter(
            (asset: any) =>
              asset.fields.file &&
              asset.fields.file.contentType.startsWith("image/") &&
              // Exclude the upcoming event poster
              asset.fields.file.url !== posterImageUrl &&
              `https:${asset.fields.file.url}` !== posterImageUrl &&
              // Exclude all poster collection posters
              !posterUrls.includes(asset.fields.file.url) &&
              !posterUrls.includes(`https:${asset.fields.file.url}`)
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
            posterCollection,
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
