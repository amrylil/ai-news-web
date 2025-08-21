import React, { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";

const MenuIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm.trim()}`);
      setSearchTerm("");
      setIsMenuOpen(false);
    }
  };

  const navLinkStyles = ({ isActive }) =>
    `group flex items-center space-x-2 px-3 py-2 font-medium transition-all duration-300 text-sm rounded-lg ${
      isActive
        ? "text-sky-600 bg-sky-50"
        : "text-slate-600 hover:text-sky-600 hover:bg-slate-100"
    }`;

  const mobileNavLinkStyles = ({ isActive }) =>
    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
      isActive
        ? "bg-sky-100 text-sky-700"
        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
    }`;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/news", label: "All News" },
    { path: "/trending", label: "Trending" },
    { path: "/saved", label: "Saved" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-slate-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="group flex items-center space-x-3">
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent group-hover:from-sky-600 group-hover:to-indigo-600 transition-all duration-300">
                  LilNews
                </h1>
                <div className="h-0.5 bg-gradient-to-r from-sky-500 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={navLinkStyles}
                >
                  <span>{link.label}</span>
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="flex items-center">
            <div className="hidden sm:block flex-1 justify-end">
              <form onSubmit={handleSearch} className="max-w-sm w-full">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-4 w-4 text-slate-400 group-focus-within:text-sky-500 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full bg-white/60 backdrop-blur-sm border border-slate-200/60 pl-10 pr-4 py-2.5 text-sm rounded-lg"
                    placeholder="Search articles..."
                    type="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </form>
            </div>

            <div className="md:hidden ml-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-600 hover:text-sky-600 hover:bg-white/60 rounded-lg"
              >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-sm border-t border-slate-200/60">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={mobileNavLinkStyles}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="p-4 border-t border-slate-200/60">
            <form onSubmit={handleSearch}>
              <input
                className="block w-full bg-slate-100 border border-transparent rounded-md py-2 px-3 text-sm"
                placeholder="Search articles..."
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
