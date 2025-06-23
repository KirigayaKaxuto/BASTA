function Categories() {
  const { Link } = ReactRouterDOM;
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const categories = window.RECIPE_DATA.categories;
  const recipes = window.RECIPE_DATA.recipes;
  
  // Get recipe count for each category
  const categoriesWithCount = categories.map(category => ({
    ...category,
    count: recipes.filter(recipe => recipe.category === category.name).length
  }));
  
  const filteredCategories = categoriesWithCount.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getColorClasses = (color) => {
    const colorMap = {
      pink: 'bg-pink-200 text-pink-600',
      yellow: 'bg-yellow-100 text-yellow-600',
      amber: 'bg-amber-100 text-amber-500',
      red: 'bg-red-100 text-red-400',
      orange: 'bg-orange-100 text-orange-500',
      blue: 'bg-blue-100 text-blue-400',
      purple: 'bg-purple-100 text-purple-400',
      green: 'bg-green-100 text-green-500'
    };
    return colorMap[color] || 'bg-gray-100 text-gray-500';
  };

  return (
    <div>
      <Navbar />
      
      {/* Header Section */}
      <section className="pastel-gradient py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Dessert Categories</h1>
          <p className="text-lg text-gray-700 mb-8">
            Explore our {categories.length} delicious dessert categories with {recipes.length} amazing recipes
          </p>
          <div className="relative max-w-xl mx-auto">
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input w-full px-5 py-3 rounded-full border-2 border-pink-100 focus:outline-none" 
              placeholder="Search categories..." 
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-pink-400 text-white p-2 rounded-full hover:bg-pink-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-pink-100 px-4 py-2 rounded-full">
              <span className="text-pink-600 font-medium">{filteredCategories.length} Categories</span>
            </div>
            <div className="bg-blue-100 px-4 py-2 rounded-full">
              <span className="text-blue-600 font-medium">{recipes.length} Total Recipes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">No categories found</h3>
              <p className="text-gray-600 mb-6">Try a different search term</p>
              <button
                onClick={() => setSearchTerm('')}
                className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition"
              >
                Show All Categories
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCategories.map((category) => (
                <Link 
                  key={category.name}
                  to={`/recipes?category=${encodeURIComponent(category.name)}`}
                  className="category-card rounded-xl overflow-hidden shadow-md bg-white cursor-pointer block"
                >
                  <div className="relative h-48">
                    <div className={`category-image h-full w-full ${getColorClasses(category.color)} flex items-center justify-center`}>
                      <div className="text-6xl">{category.icon}</div>
                    </div>
                    <div className="category-overlay absolute inset-0 flex items-end">
                      <div className="p-4 w-full">
                        <h3 className="text-xl font-bold text-white">{category.name}</h3>
                        <p className="text-white text-sm opacity-90">{category.count} recipes</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-500">
                        {category.count} recipe{category.count !== 1 ? 's' : ''}
                      </span>
                      <span className={`text-sm font-medium hover:underline ${category.color === 'yellow' ? 'text-yellow-600' : `text-${category.color}-500`}`}>
                        Explore →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}