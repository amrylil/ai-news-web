import { fetchFromGNews } from "./gnewsApiService";
import { fetchFromTheGuardian } from "./guardianApiService";
import { fetchFromNewsAPI } from "./newsApiService";

const SEARCH_KEYWORD = "artificial intelligence";

export const fetchAllNews = async (keyword = SEARCH_KEYWORD) => {
  console.log("Fetching news for keyword:", keyword);

  const promises = [
    // fetchFromGNews(keyword),
    fetchFromTheGuardian(keyword),
    fetchFromNewsAPI(keyword),
  ];

  const results = await Promise.allSettled(promises);

  const allNews = results
    .filter((result) => result.status === "fulfilled")
    .flatMap((result) => result.value);

  allNews.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  console.log("Total articles fetched and sorted:", allNews.length);
  return allNews;
};
