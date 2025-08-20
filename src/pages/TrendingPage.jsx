import React, { useMemo } from "react";
import { useOutletContext } from "react-router-dom";
import NewsCard from "../components/ui/Card";

const TrendingPage = () => {
  const { articles, loading, error } = useOutletContext();

  const trendingArticles = useMemo(() => {
    if (!articles) return [];
    return articles.slice(0, 12);
  }, [articles]);

  if (loading) {
    return <div className="text-center text-slate-400 mt-20">Loading...</div>;
  }
  if (error) {
    return <div className="text-center text-red-500 mt-20">{error}</div>;
  }

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <main className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Trending News</h1>
          <p className="text-slate-400 mt-2">
            The most popular AI news stories right now.
          </p>
        </div>

        {trendingArticles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-500 mt-20">
            No trending articles found.
          </p>
        )}
      </main>
    </div>
  );
};

export default TrendingPage;
