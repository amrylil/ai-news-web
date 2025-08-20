export const HeroCard = ({ article }) => (
  <div className="relative h-[500px] md:h-[600px] overflow-hidden  bg-gradient-to-t from-black/80 via-black/40 to-transparent ">
    <img
      src={
        article.image ||
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=600&fit=crop"
      }
      alt={article.title}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
    <div className="absolute bottom-0 left-0 right-0 p-24 ">
      <div className="max-w-7xl">
        <div className="flex items-center gap-4 mb-4">
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
            Breaking
          </span>
          <span className="text-gray-300 text-sm">
            {new Date(article.publishedAt).toLocaleDateString()}
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          {article.title}
        </h1>
        <p className="text-gray-200 text-base md:text-lg max-w-3xl mb-6 line-clamp-3">
          {article.description}
        </p>
        <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
          Read More
        </button>
      </div>
    </div>
  </div>
);
