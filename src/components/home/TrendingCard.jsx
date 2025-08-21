import { Link } from "react-router-dom";

export const TrendingCard = ({ article, size, index }) => {
  const articleId = encodeURIComponent(article.id);

  const getCardHeight = () => {
    switch (size) {
      case "large":
        return "h-[400px] md:h-[500px]";
      case "medium":
        return "h-[200px] md:h-[240px]";
      default:
        return "h-[180px]";
    }
  };

  const getTitleSize = () => {
    switch (size) {
      case "large":
        return "text-xl md:text-2xl lg:text-3xl";
      case "medium":
        return "text-lg md:text-xl";
      default:
        return "text-base md:text-lg";
    }
  };

  return (
    <Link
      to={`/article/${articleId}`} // 👈 arahkan ke halaman detail artikel
      className={`group relative overflow-hidden rounded-xl bg-gray-100 block ${getCardHeight()}`}
    >
      <img
        src={
          article.image ||
          `https://images.unsplash.com/photo-${
            1500000000000 + index
          }?w=800&h=600&fit=crop`
        }
        alt={article.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

      <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
        <div className="mb-3">
          <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
            {index === 0 ? "Breaking" : "Trending"}
          </span>
        </div>

        <h3
          className={`font-bold text-white mb-2 line-clamp-3 leading-tight ${getTitleSize()}`}
        >
          {article.title}
        </h3>

        {size === "large" && (
          <p className="text-gray-200 text-sm md:text-base line-clamp-2 mb-4">
            {article.description}
          </p>
        )}

        <div className="flex items-center justify-between text-xs text-gray-300">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            {new Date(article.timestamp).toLocaleDateString()}
          </span>
          {size === "large" && (
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
              {Math.floor(Math.random() * 1000) + 500}
            </span>
          )}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </Link>
  );
};
