const normalizeSpaceflightNews = (item) => {
  if (!item) return null;
  return {
    id: item.id.toString(),
    title: item.title,
    url: item.url,
    image: item.image_url,
    timestamp: item.published_at,
    source: item.news_site,
  };
};

export const fetchFromSpaceflightNews = async (keyword) => {
  try {
    const response = await fetch(
      `https://api.spaceflightnewsapi.net/v4/articles/?search=${keyword}&limit=20`
    );
    const data = await response.json();

    const normalizedStories = data.results.map(normalizeSpaceflightNews);

    return normalizedStories;
  } catch (error) {
    console.error("Error fetching from Spaceflight News:", error);
    return [];
  }
};
