import { cacheLife } from "next/cache";

async function getCachedData() {
  "use cache";
  cacheLife("hours");

  return {
    timestamp: Date.now(),
    message: "This data is cached for hours",
  };
}

interface CachedDataProps {
  title?: string;
}

export async function CachedData({ title = "Cached Data Component" }: CachedDataProps) {
  const data = await getCachedData();

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>{title}</h2>
      <p>Message: {data.message}</p>
      <p>Timestamp: {data.timestamp}</p>
    </div>
  );
}
