
function Navbar() {
  return (
    <nav className="bg-white shadow-md px-4 py-3">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <span className="logo-text text-3xl font-bold bg-clip-text text-transparent pastel-gradient">
            <Link to="/">BASTA Desserts</Link>
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-6">
          <Link className="nav-button px-3 py-2 text-pink-400 font-medium" to="/">Home</Link>
          <Link className="nav-button px-3 py-2 text-yellow-400 font-medium" to="/recipes">Recipes</Link>
          <Link className="nav-button px-3 py-2 text-green-400 font-medium" to="/categories">Category</Link>
          <Link className="nav-button px-3 py-2 text-blue-400 font-medium" to="/about">About Us</Link>
          <Link className="nav-button px-4 py-2 bg-purple-200 text-purple-600 rounded-full font-medium hover:bg-purple-300 transition" to="/login">Login/Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}

