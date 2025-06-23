function Navbar() {
  const { Link, useLocation } = ReactRouterDOM;
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <nav className="bg-white shadow-md px-4 py-3 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <span className="logo-text text-3xl font-bold bg-clip-text text-transparent pastel-gradient">
            <Link to="/">BASTA Desserts</Link>
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-6">
          <Link 
            className={`nav-button px-3 py-2 font-medium ${isActive('/') ? 'text-pink-600' : 'text-pink-400'}`} 
            to="/"
          >
            Home
          </Link>
          <Link 
            className={`nav-button px-3 py-2 font-medium ${isActive('/recipes') ? 'text-yellow-600' : 'text-yellow-400'}`} 
            to="/recipes"
          >
            Recipes
          </Link>
          <Link 
            className={`nav-button px-3 py-2 font-medium ${isActive('/categories') ? 'text-green-600' : 'text-green-400'}`} 
            to="/categories"
          >
            Category
          </Link>
          <Link 
            className={`nav-button px-3 py-2 font-medium ${isActive('/about') ? 'text-blue-600' : 'text-blue-400'}`} 
            to="/about"
          >
            About Us
          </Link>
          <Link 
            className="nav-button px-4 py-2 bg-purple-200 text-purple-600 rounded-full font-medium hover:bg-purple-300 transition" 
            to="/login"
          >
            Login/Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}