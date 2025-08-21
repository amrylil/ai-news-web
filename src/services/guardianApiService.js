const GUARDIAN_KEY = import.meta.env.VITE_GUARDIAN_KEY;

const normalizeTheGuardian = (results = []) => {
  return results.map((article) => ({
    id: article.webUrl,
    title: article.webTitle,
    url: article.webUrl,
    image: article.urlToImage,
    timestamp: article.webPublicationDate,
    source: "The Guardian",
  }));
};

export const fetchFromTheGuardian = async (keyword) => {
  try {
    const response = await fetch(
      `https://content.guardianapis.com/search?q=${keyword}&api-key=${GUARDIAN_KEY}`
    );
    const data = await response.json();
    if (data.response.status !== "ok")
      throw new Error("Failed to fetch from The Guardian");
    return normalizeTheGuardian(data.response.results);
  } catch (error) {
    console.error("Error fetching from The Guardian:", error);
    return [];
  }
};
