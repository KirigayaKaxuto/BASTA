function RecipeDetail() {
  const { useParams, Link, useNavigate } = ReactRouterDOM;
  const { id } = useParams();
  const navigate = useNavigate();
  
  const recipe = window.RECIPE_DATA.recipes.find(r => r.id === parseInt(id));
  
  if (!recipe) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Recipe Not Found</h1>
          <p className="text-gray-600 mb-8">The recipe you're looking for doesn't exist.</p>
          <Link to="/recipes" className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition">
            Browse All Recipes
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedRecipes = window.RECIPE_DATA.recipes
    .filter(r => r.category === recipe.category && r.id !== recipe.id)
    .slice(0, 3);

  return (
    <div>
      <Navbar />
      
      {/* Recipe Header */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-pink-500 hover:text-pink-600 mb-6"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Recipes
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img 
                src={recipe.image} 
                alt={recipe.name}
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">
                  {recipe.category}
                </span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  {recipe.difficulty}
                </span>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{recipe.name}</h1>
              <p className="text-lg text-gray-600 mb-6">{recipe.description}</p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-pink-50 rounded-lg">
                  <div className="text-2xl mb-2">⏱️</div>
                  <div className="text-sm text-gray-600">Prep Time</div>
                  <div className="font-semibold">{recipe.time}</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl mb-2">👥</div>
                  <div className="text-sm text-gray-600">Servings</div>
                  <div className="font-semibold">{recipe.servings}</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl mb-2">📊</div>
                  <div className="text-sm text-gray-600">Difficulty</div>
                  <div className="font-semibold">{recipe.difficulty}</div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Save Recipe
                </button>
                <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-200 transition flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Ingredients */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-md sticky top-24">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Ingredients</h2>
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-6 h-6 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Instructions */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Instructions</h2>
                <ol className="space-y-6">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                        {index + 1}
                      </span>
                      <div>
                        <p className="text-gray-700 leading-relaxed">{instruction}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Recipes */}
      {relatedRecipes.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              More {recipe.category} Recipes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedRecipes.map((relatedRecipe) => (
                <Link 
                  key={relatedRecipe.id}
                  to={`/recipe/${relatedRecipe.id}`}
                  className="recipe-card bg-white rounded-xl overflow-hidden shadow-md block"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={relatedRecipe.image} 
                      alt={relatedRecipe.name}
                      className="recipe-image w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{relatedRecipe.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{relatedRecipe.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-pink-500 font-medium">⏱️ {relatedRecipe.time}</span>
                      <span className="text-pink-500 font-medium hover:underline">View Recipe</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      
      <Footer />
    </div>
  );
}