import { Link } from "react-router-dom";
import { useSaved } from "../../context/SavedArticlesContext";

const BookmarkIcon = ({ saved }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={saved ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
  </svg>
);

const formatDate = (isoString) => {
  if (!isoString) return "No date";
  return new Date(isoString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const NewsCard = ({ article, isFeatured = false }) => {
  const savedContext = useSaved();

  if (!savedContext) {
    console.error(
      "ERROR: NewsCard must be used within a SavedArticlesProvider."
    );
  }

  const { addArticle, removeArticle, isSaved } = savedContext || {};

  if (!article) return null;

  const articleId = encodeURIComponent(article.id);
  const saved = typeof isSaved === "function" ? isSaved(article.id) : false;

  const handleSaveClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (saved) {
      removeArticle(article.id);
    } else {
      addArticle(article);
    }
  };

  return (
    <div className="relative group h-full">
      <Link
        to={`/article/${articleId}`}
        className={`
          flex flex-col h-full // 1. Membuat kartu mengisi tinggi & menjadi flex container
          block relative bg-white/80 backdrop-blur-sm border border-gray-200/60
          transition-all duration-500 ease-out
          hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10
          hover:-translate-y-2 hover:border-blue-200/80
          ${isFeatured ? "col-span-1 md:col-span-2" : ""}
        `}
        style={{ borderRadius: "8px" }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ borderRadius: "8px" }}
        ></div>

        <div className="relative flex flex-col justify-between h-full">
          <div
            className="relative overflow-hidden"
            style={{ borderRadius: "8px 8px 0 0" }}
          >
            <img
              src={
                article.image ||
                "https://placehold.co/400x225/1e293b/94a3b8?text=AI+News"
              }
              alt={article.title}
              className={`
                w-full object-cover transition-all duration-700 ease-out
                group-hover:scale-105 group-hover:brightness-110
                ${isFeatured ? "h-48" : "h-40"}
              `}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          {/* 2. Membuat area teks ini meregang dan menjadi flex container */}
          <div className="p-5 relative flex flex-col flex-grow">
            <h3
              className={`
                font-bold text-gray-800 leading-tight mb-3
                group-hover:text-gray-900 transition-colors duration-300
                line-clamp-3 // 3. Membatasi judul menjadi 3 baris
                ${isFeatured ? "text-xl lg:text-2xl" : "text-base lg:text-lg"}
              `}
            >
              {article.title}
            </h3>

            {/* 4. Mendorong footer ke bagian paling bawah */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
              <div className="flex items-center space-x-2">
                <span
                  className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200/50"
                  style={{ borderRadius: "6px" }}
                >
                  {article.source}
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                <svg
                  className="w-4 h-4 mr-1.5 opacity-70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {formatDate(article.timestamp)}
              </div>
            </div>
          </div>
        </div>
      </Link>

      {savedContext && (
        <button
          onClick={handleSaveClick}
          className={`
            absolute top-3 right-3 p-2 rounded-full transition-all duration-300 z-10
            ${
              saved
                ? "bg-blue-600 text-white scale-110"
                : "bg-black/40 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:bg-blue-600"
            }`}
          aria-label="Save article"
        >
          <BookmarkIcon saved={saved} />
        </button>
      )}
    </div>
  );
};

export default NewsCard;
