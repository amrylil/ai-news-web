import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLayout from "./layouts/AppLayout";
import DetailPage from "./pages/DetailPage";
import TrendingPage from "./pages/TrendingPage";
import ListPage from "./pages/ListPage";
import { SavedArticlesProvider } from "./context/SavedArticlesContext";
import SavedPage from "./pages/SavedPage";

function App() {
  return (
    <BrowserRouter>
      <SavedArticlesProvider>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/article/:id" element={<DetailPage />} />
            <Route path="/trending" element={<TrendingPage />} />
            <Route path="/news" element={<ListPage />} />
            <Route path="/search/:query" element={<ListPage />} />
            <Route path="/saved" element={<SavedPage />} />
          </Route>
        </Routes>
      </SavedArticlesProvider>
    </BrowserRouter>
  );
}

export default App;
