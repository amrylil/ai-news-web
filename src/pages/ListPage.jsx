// src/pages/ListPage.jsx

import React, { useState, useMemo, useEffect } from "react";
import { useParams, useOutletContext, Link } from "react-router-dom";
import Pagination from "../components/ui/Pagination";
import NewsCard from "../components/ui/Card";

const ITEMS_PER_PAGE = 12; // Atur berapa berita yang ditampilkan per halaman

const ListPage = () => {
  const { query } = useParams(); // Ambil query pencarian dari URL jika ada
  const { articles, loading, error } = useOutletContext();
  const [currentPage, setCurrentPage] = useState(1);

  // Filter artikel berdasarkan query pencarian, atau gunakan semua artikel
  const filteredArticles = useMemo(() => {
    if (!query) return articles; // Jika tidak ada query, tampilkan semua
    return articles.filter((article) =>
      article.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [articles, query]);

  // Hitung total halaman
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);

  // Ambil artikel untuk halaman saat ini
  const currentArticles = filteredArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset ke halaman 1 setiap kali query berubah
  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  if (loading) {
    return (
      <div className="text-center text-slate-400 mt-20">Loading news...</div>
    );
  }
  if (error) {
    return <div className="text-center text-red-500 mt-20">{error}</div>;
  }

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <main className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mt-2">
            {query ? (
              <>
                Search Results for:{" "}
                <span className="text-sky-500">{query}</span>
              </>
            ) : (
              "All News"
            )}
          </h1>
        </div>

        {currentArticles.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentArticles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        ) : (
          <p className="text-center text-slate-500 mt-20">
            No articles found {query ? `for "${query}"` : ""}.
          </p>
        )}
      </main>
    </div>
  );
};

export default ListPage;
