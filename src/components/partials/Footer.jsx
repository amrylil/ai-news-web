const Footer = () => {
  return (
    <footer className="relative mt-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="flex items-center space-x-3">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                LilNews
              </h3>
              <p className="text-sm text-gray-500">Stay informed, stay ahead</p>
            </div>
          </div>

          <div className="flex items-center space-x-1">
            <a
              href="#"
              className="group p-3 bg-white/60 backdrop-blur-sm border border-gray-200/60 text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-md"
              style={{ borderRadius: "10px" }}
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>

            <a
              href="#"
              className="group p-3 bg-white/60 backdrop-blur-sm border border-gray-200/60 text-gray-600 hover:text-pink-600 hover:bg-pink-50 hover:border-pink-200 transition-all duration-300 shadow-sm hover:shadow-md"
              style={{ borderRadius: "10px" }}
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.995 1.488-1.995.219 0 .748.142.748.142s.219.219.219.748c0 .453-.142.906-.142 1.359 0 .748.453 1.358 1.201 1.358.748 0 1.406-.61 1.406-1.501 0-1.358-1.047-2.306-2.544-2.306-1.781 0-2.8 1.358-2.8 2.759 0 .545.199 1.142.453 1.501-.05.219-.199.891-.219 1.047-.021.199-.021.418 0 .637.199.328.656.437.985.219.328-.219.547-.656.547-.656s.199-.891.328-1.359c.328.624 1.047 1.047 1.874 1.047 2.459 0 4.13-2.306 4.13-5.385 0-2.806-2.306-5.057-5.728-5.057-4.13 0-7.274 2.976-7.274 6.934 0 1.359.453 2.306 1.142 3.263.124.142.142.219.104.359-.021.104-.104.453-.142.578-.041.142-.178.178-.32.104-1.201-.578-1.953-2.306-1.953-3.718 0-3.016 2.188-5.787 6.301-5.787 3.312 0 5.885 2.306 5.885 5.385 0 3.718-2.306 6.5-5.385 6.5-1.078 0-2.094-.578-2.438-1.259 0 0-.547 2.094-.656 2.594-.199.891-.748 2.094-1.142 2.8C9.84 23.736 10.899 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
              </svg>
            </a>

            <a
              href="#"
              className="group p-3 bg-white/60 backdrop-blur-sm border border-gray-200/60 text-gray-600 hover:text-blue-700 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-md"
              style={{ borderRadius: "10px" }}
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200/60 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2025 LilNews. Crafted with
            <span className="text-red-500 mx-1">♥</span>
            for news enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
