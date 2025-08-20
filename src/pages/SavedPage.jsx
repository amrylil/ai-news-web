import NewsCard from "../components/ui/Card";
import { useSaved } from "../context/SavedArticlesContext";

const SavedPage = () => {
  const { savedArticles } = useSaved();

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <main className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Saved Articles</h1>
          <p className="text-slate-400 mt-2">
            Your personal collection of must-read AI news.
          </p>
        </div>

        {savedArticles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {savedArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center text-slate-500 mt-20">
            <p className="text-lg">You haven't saved any articles yet.</p>
            <p className="mt-2">
              Click the bookmark icon on any news card to save it for later.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default SavedPage;
