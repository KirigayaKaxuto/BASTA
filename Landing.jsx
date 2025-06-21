function Landing() {
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name || e.target.id]: e.target.value });
  };
  const handleSubmit = () => {
    const { name, email, message } = form;
    if (name && email && message) {
      alert('Thank you for your message! We will get back to you soon.');
      setForm({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields before sending.');
    }
  };

  return (
    <div>
      <Navbar />
      <section className="pastel-gradient py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Discover Delicious Homemade Desserts</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">Explore our collection of easy-to-follow recipes for cakes, cookies, pastries, and more!</p>
          <Link className="bg-white text-pink-500 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition inline-block" to="/recipes">Browse Recipes</Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Top Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="recipe-card bg-pink-50 rounded-xl overflow-hidden shadow-md">
              <div className="h-48 bg-pink-200 flex items-center justify-center">
                <svg className="h-24 w-24 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Strawberry Shortcake</h3>
                <p className="text-gray-600 mb-4">A classic dessert with layers of sweet cake, fresh strawberries, and whipped cream.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-pink-500">30 minutes</span>
                  <button className="text-pink-500 font-medium hover:underline" onClick={() => alert('Viewing recipe for Strawberry Shortcake')}>View Recipe</button>
                </div>
              </div>
            </div>

            <div className="recipe-card bg-yellow-50 rounded-xl overflow-hidden shadow-md">
              <div className="h-48 bg-yellow-200 flex items-center justify-center">
                <svg className="h-24 w-24 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Lemon Cheesecake</h3>
                <p className="text-gray-600 mb-4">Creamy cheesecake with a bright lemon flavor and graham cracker crust.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-yellow-500">1 hour</span>
                  <button className="text-yellow-500 font-medium hover:underline" onClick={() => alert('Viewing recipe for Lemon Cheesecake')}>View Recipe</button>
                </div>
              </div>
            </div>

            <div className="recipe-card bg-green-50 rounded-xl overflow-hidden shadow-md">
              <div className="h-48 bg-green-200 flex items-center justify-center">
                <svg className="h-24 w-24 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A2 2 0 013 15.382V6a2 2 0 011.106-1.789l7-3.5a2 2 0 011.788 0l7 3.5A2 2 0 0121 6v9.382a2 2 0 01-1.553 1.894L14 20v1l-4-1v1z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Chocolate Mousse</h3>
                <p className="text-gray-600 mb-4">Rich and creamy chocolate mousse topped with whipped cream and chocolate shavings.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-500">45 minutes</span>
                  <button className="text-green-500 font-medium hover:underline" onClick={() => alert('Viewing recipe for Chocolate Mousse')}>View Recipe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 pastel-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Contact Us</h2>
            <p className="text-center text-gray-600 mb-8">Have questions or suggestions? We'd love to hear from you!</p>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input name="name" id="name" value={form.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input name="email" id="email" type="email" value={form.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent" placeholder="Your email" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea name="message" id="message" rows="4" value={form.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent" placeholder="Your message"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-purple-500 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-purple-600 transition transform hover:-translate-y-1">Send Message</button>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">This is a demo contact form. In a real application, this would send your message to our team.</p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

