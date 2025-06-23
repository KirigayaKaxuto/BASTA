function Landing() {
  const { Link } = ReactRouterDOM;
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name || e.target.id]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    
    if (!name || !email || !message) {
      alert('Please fill in all fields before sending.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setForm({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const featuredRecipes = window.RECIPE_DATA.recipes.slice(0, 3);

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pastel-gradient py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
            Discover Delicious Homemade Desserts
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Explore our collection of easy-to-follow recipes for cakes, cookies, pastries, and more! 
            From beginner-friendly treats to advanced confections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              className="bg-white text-pink-500 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition inline-block" 
              to="/recipes"
            >
              Browse All Recipes
            </Link>
            <Link 
              className="bg-pink-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition inline-block" 
              to="/categories"
            >
              Explore Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe) => (
              <div key={recipe.id} className="recipe-card bg-white rounded-xl overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={recipe.image} 
                    alt={recipe.name}
                    className="recipe-image w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {recipe.category}
                    </span>
                    <span className="text-xs text-gray-500">{recipe.difficulty}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{recipe.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{recipe.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-pink-500 font-medium">⏱️ {recipe.time}</span>
                    <Link 
                      to={`/recipe/${recipe.id}`}
                      className="text-pink-500 font-medium hover:underline"
                    >
                      View Recipe
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/recipes" 
              className="bg-pink-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition inline-block"
            >
              View All Recipes
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 pastel-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{window.RECIPE_DATA.recipes.length}+</div>
              <div className="text-gray-600">Recipes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{window.RECIPE_DATA.categories.length}</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-800 mb-2">1000+</div>
              <div className="text-gray-600">Happy Bakers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-800 mb-2">4.9</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Contact Us</h2>
            <p className="text-center text-gray-600 mb-8">
              Have questions, suggestions, or want to share your baking success? We'd love to hear from you!
            </p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input 
                    name="name" 
                    id="name" 
                    value={form.name} 
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent" 
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input 
                    name="email" 
                    id="email" 
                    type="email" 
                    value={form.email} 
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent" 
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows="4" 
                  value={form.message} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent" 
                  placeholder="Tell us about your baking adventures or ask us anything!"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-purple-500 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-purple-600 transition transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                This is a demo contact form. In a real application, this would send your message to our team.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}