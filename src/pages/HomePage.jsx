import { useState, useMemo } from "react";
import { useNewsData } from "../hooks/useNewsData";
import NewsCard from "../components/ui/Card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Navbar from "../components/partials/Navbar";
import { TrendingCard } from "../components/home/TrendingCard";
import { HeroCard } from "../components/home/HeroCard";

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-8">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
      {title}
    </h2>
    {subtitle && (
      <p className="text-gray-600 text-sm md:text-base">{subtitle}</p>
    )}
    <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mt-3 rounded-full"></div>
  </div>
);

const Spinner = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

const ErrorDisplay = ({ message }) => (
  <div className="text-center py-20">
    <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-md mx-auto">
      <div className="text-red-600 text-4xl mb-4">⚠️</div>
      <h3 className="text-red-800 font-semibold mb-2">
        Oops! Something went wrong
      </h3>
      <p className="text-red-600">{message}</p>
    </div>
  </div>
);

const TopicBadge = ({ topic, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
    }`}
  >
    {topic}
  </button>
);

const HomePage = () => {
  const { articles, loading, error } = useNewsData();

  const trendingTopics = [
    "AI",
    "Technology",
    "Innovation",
    "Startups",
    "Research",
  ];
  const [activeTopic, setActiveTopic] = useState(trendingTopics[0]);

  const { heroArticles, featuredArticles, latestArticles, trendingArticles } =
    useMemo(() => {
      if (!articles || articles.length === 0) {
        return {
          heroArticles: [],
          featuredArticles: [],
          latestArticles: [],
          trendingArticles: [],
        };
      }

      const filteredTrending = articles
        .filter(
          (article) =>
            article.title.toLowerCase().includes(activeTopic.toLowerCase()) ||
            article.description
              ?.toLowerCase()
              .includes(activeTopic.toLowerCase())
        )
        .slice(0, 6);

      return {
        heroArticles: articles.slice(0, 3),
        featuredArticles: articles.slice(3, 7),
        latestArticles: articles.slice(7, 16),
        trendingArticles:
          filteredTrending.length > 0 ? filteredTrending : articles.slice(0, 6),
      };
    }, [articles, activeTopic]);

  if (loading) return <Spinner />;
  if (error) return <ErrorDisplay message={error} />;

  return (
    <>
      {articles.length > 0 && (
        <div className=" space-y-16">
          <section className="">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              effect="fade"
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet !bg-white/50",
                bulletActiveClass: "swiper-pagination-bullet-active !bg-white",
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              className="hero-swiper "
            >
              {heroArticles.map((article, index) => (
                <SwiperSlide key={`${article.id}-${index}`}>
                  <HeroCard article={article} />
                </SwiperSlide>
              ))}

              {/* Custom Navigation */}
              <div className="swiper-button-prev !text-white !w-12 !h-12 !mt-0 !top-1/2 !left-4 bg-black/30 rounded-full backdrop-blur-sm hover:bg-black/50 transition-colors"></div>
              <div className="swiper-button-next !text-white !w-12 !h-12 !mt-0 !top-1/2 !right-4 bg-black/30 rounded-full backdrop-blur-sm hover:bg-black/50 transition-colors"></div>
            </Swiper>
          </section>

          <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <section>
              <SectionHeader
                title="Featured Stories"
                subtitle="Must-read articles curated by our editors"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredArticles.map((article, index) => (
                  <NewsCard
                    key={`${article.id}-featured-${index}`}
                    article={article}
                    variant="featured"
                  />
                ))}
              </div>
            </section>

            <section>
              <SectionHeader
                title="Trending Topics"
                subtitle="Hot topics everyone's talking about"
              />
              <div className="flex flex-wrap gap-3 mb-8">
                {trendingTopics.map((topic) => (
                  <TopicBadge
                    key={topic}
                    topic={topic}
                    isActive={activeTopic === topic}
                    onClick={() => setActiveTopic(topic)}
                  />
                ))}
              </div>

              <div className="grid grid-cols-12 gap-4 auto-rows-min">
                {trendingArticles.map((article, index) => {
                  const layouts = [
                    "col-span-12 md:col-span-8 row-span-2",
                    "col-span-12 md:col-span-4 row-span-1",
                    "col-span-12 md:col-span-4 row-span-1",
                    "col-span-12 sm:col-span-6 md:col-span-4 row-span-1",
                    "col-span-12 sm:col-span-6 md:col-span-4 row-span-1",
                    "col-span-12 sm:col-span-6 md:col-span-4 row-span-1",
                  ];

                  const layout = layouts[index % layouts.length];
                  const isLarge = index === 0;
                  const isMedium = index === 1 || index === 2;

                  return (
                    <div
                      key={`${article.id}-trending-${index}`}
                      className={layout}
                    >
                      <TrendingCard
                        article={article}
                        size={isLarge ? "large" : isMedium ? "medium" : "small"}
                        index={index}
                      />
                    </div>
                  );
                })}
              </div>

              {/* More Trending Button */}
              <div className="text-center mt-8">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-full font-medium text-gray-700 transition-colors">
                  More Trending
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </section>

            <section>
              <SectionHeader
                title="Latest News"
                subtitle="Stay updated with the most recent developments"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {latestArticles.map((article, index) => (
                  <NewsCard
                    key={`${article.id}-latest-${index}`}
                    article={article}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      )}

      {!loading && !error && articles.length === 0 && (
        <div className="text-center py-20 max-w-7xl mx-auto">
          <div className="text-gray-400 text-6xl mb-4">📰</div>
          <h3 className="text-gray-600 font-semibold mb-2">
            No Articles Available
          </h3>
          <p className="text-gray-500">
            Please check back later for the latest news.
          </p>
        </div>
      )}
    </>
  );
};

export default HomePage;
