function Recipes() {
  const { Link } = ReactRouterDOM;
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [selectedLetter, setSelectedLetter] = React.useState('');
  
  const recipes = window.RECIPE_DATA.recipes;
  const categories = ['All', ...window.RECIPE_DATA.categories.map(cat => cat.name)];
  
  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
    const matchesLetter = !selectedLetter || recipe.name.charAt(0).toLowerCase() === selectedLetter.toLowerCase();
    
    return matchesSearch && matchesCategory && matchesLetter;
  });

  return (
    <div>
      <Navbar />
      
      {/* Header Section */}
      <section className="pastel-gradient py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">All Recipes</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Browse our complete collection of {recipes.length} delicious dessert recipes
            </p>
            <div className="relative max-w-xl mx-auto">
              <input 
                type="text" 
                placeholder="Search for recipes..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input w-full px-5 py-3 rounded-full border-2 border-pink-100 focus:outline-none focus:border-pink-300 shadow-sm" 
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-pink-400 text-white p-2 rounded-full hover:bg-pink-500 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-white shadow-sm sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  selectedCategory === category
                    ? 'bg-pink-400 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-pink-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Alphabet Filter */}
          <div className="flex flex-wrap justify-center gap-1">
            <button
              onClick={() => setSelectedLetter('')}
              className={`letter-nav w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                !selectedLetter ? 'bg-pink-400 text-white' : 'text-gray-600 hover:bg-pink-100'
              }`}
            >
              All
            </button>
            {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
              <button 
                key={letter}
                onClick={() => setSelectedLetter(letter)}
                className={`letter-nav w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  selectedLetter === letter ? 'bg-pink-400 text-white' : 'text-gray-600 hover:bg-pink-100'
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-gray-600 text-center">
              Showing {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''}
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              {selectedLetter && ` starting with "${selectedLetter}"`}
            </p>
          </div>
          
          {filteredRecipes.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">No recipes found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedLetter('');
                }}
                className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredRecipes.map((recipe) => (
                <div key={recipe.id} className="recipe-card rounded-xl overflow-hidden shadow-md bg-white cursor-pointer">
                  <div className="relative h-48">
                    <img 
                      src={recipe.image} 
                      alt={recipe.name}
                      className="recipe-image h-full w-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="bg-white bg-opacity-90 text-xs font-medium px-2 py-1 rounded-full">
                        {recipe.difficulty}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {recipe.category}
                      </span>
                      <span className="text-xs text-gray-500">👥 {recipe.servings}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">{recipe.name}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{recipe.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-pink-500 font-medium">⏱️ {recipe.time}</span>
                      <Link 
                        to={`/recipe/${recipe.id}`}
                        className="text-pink-500 font-medium hover:underline text-sm"
                      >
                        View Recipe
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}