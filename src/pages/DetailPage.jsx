// src/pages/DetailPage.jsx

import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";

const formatDate = (isoString) => {
  if (!isoString) return "No date available";
  return new Date(isoString).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const outletContext = useOutletContext();
  const articles = outletContext?.articles || [];
  const loading = outletContext?.loading ?? true;

  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (loading || articles.length === 0) {
      return;
    }
    const decodedId = decodeURIComponent(id);
    const foundArticle = articles.find((art) => art.id === decodedId);
    setArticle(foundArticle);
  }, [id, loading, articles]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div
          className="bg-white/80 backdrop-blur-sm p-8 border border-gray-200/60 shadow-xl"
          style={{ borderRadius: "12px" }}
        >
          <div className="flex items-center space-x-3">
            <div
              className="animate-spin w-6 h-6 border-3 border-blue-500 border-t-transparent"
              style={{ borderRadius: "50%" }}
            ></div>
            <span className="text-gray-700 font-medium">
              Loading article details...
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col items-center justify-center p-4 ">
        <div
          className="bg-white/90 backdrop-blur-sm p-12 text-center border border-gray-200/60 shadow-2xl max-w-md w-full"
          style={{ borderRadius: "16px" }}
        >
          <div
            className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 mx-auto mb-6 flex items-center justify-center"
            style={{ borderRadius: "50%" }}
          >
            <svg
              className="w-10 h-10 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Article Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The article you're looking for doesn't exist or may have been
            removed.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            style={{ borderRadius: "10px" }}
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/30 pointer-events-none"></div>

      <main className="relative max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
        {/* Back button with modern styling */}
        <button
          onClick={() => navigate(-1)}
          className="group mb-8 inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm hover:bg-white border border-gray-200/60 hover:border-blue-200 text-gray-700 hover:text-blue-600 font-medium py-3 px-5 transition-all duration-300 shadow-sm hover:shadow-md"
          style={{ borderRadius: "10px" }}
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>Back</span>
        </button>

        {/* Article container */}
        <article
          className="bg-white/70 backdrop-blur-sm border border-gray-200/60 shadow-2xl shadow-blue-500/5 overflow-hidden"
          style={{ borderRadius: "16px" }}
        >
          {/* Header section */}
          <div className="p-6 md:p-8 lg:p-10 bg-gradient-to-r from-blue-50/50 to-purple-50/30">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {article.title}
            </h1>

            {/* Metadata with modern badges */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span
                className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium border border-blue-200"
                style={{ borderRadius: "8px" }}
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
                {article.source}
              </span>
              <span
                className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium border border-gray-200"
                style={{ borderRadius: "8px" }}
              >
                <svg
                  className="w-4 h-4 mr-2"
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
              </span>
            </div>
          </div>

          {/* Featured image */}
          <figure className="relative overflow-hidden">
            <img
              src={
                article.image ||
                "https://placehold.co/1200x675/e2e8f0/64748b?text=AI+News"
              }
              alt={article.title}
              className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </figure>

          {/* Content section */}
          <div className="p-6 md:p-8 lg:p-10">
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed text-gray-800 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <p className="leading-relaxed">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est. Mauris placerat eleifend leo. Quisque sit amet est et
                sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
                sed, commodo vitae, ornare sit amet, wisi.
              </p>

              <p className="leading-relaxed">
                Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
                eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
                nisi.
              </p>

              <p className="leading-relaxed">
                Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                condimentum rhoncus, sem quam semper libero, sit amet adipiscing
                sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
                pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
                tincidunt tempus. Donec vitae sapien ut libero venenatis
                faucibus. Nullam quis ante. Etiam sit amet orci eget eros
                faucibus tincidunt. Duis leo.
              </p>
            </div>

            {/* Call to action */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
                style={{ borderRadius: "12px" }}
              >
                <span className="text-lg">Read Full Story</span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default DetailPage;
