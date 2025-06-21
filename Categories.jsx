function Categories() {
  return (
    <div>
      <Navbar />
      <section className="pastel-gradient py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Dessert Categories</h1>
          <p className="text-lg text-gray-700 mb-8">Explore our delicious dessert recipes by category</p>
          <div className="relative max-w-xl mx-auto">
            <input type="text" className="search-input w-full px-5 py-3 rounded-full border-2 border-pink-100 focus:outline-none" placeholder="Search for recipes..." />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-pink-400 text-white p-2 rounded-full hover:bg-pink-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4 text-center">
          <button className="px-4 py-2 rounded-full bg-pink-400 text-white font-medium">All Categories</button>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            <div className="category-card rounded-xl overflow-hidden shadow-md bg-white cursor-pointer">
              <div className="relative h-48">
                <div className="category-image h-full w-full bg-pink-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <div className="category-overlay absolute inset-0 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-xl font-bold text-white">Cakes</h3>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm">From classic chocolate to creative layered cakes for any occasion</p>
                <div className="mt-3 flex justify-end">
                  <button className="text-pink-400 hover:underline font-medium text-sm">View All</button>
                </div>
              </div>
            </div>

            <div className="category-card rounded-xl overflow-hidden shadow-md bg-white cursor-pointer">
              <div className="relative h-48">
                <div className="category-image h-full w-full bg-yellow-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
                <div className="category-overlay absolute inset-0 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-xl font-bold text-white">Cookies</h3>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm">Chewy, crunchy, or soft - perfect cookies for any craving</p>
                <div className="mt-3 flex justify-end">
                  <button className="text-yellow-600 hover:underline font-medium text-sm">View All</button>
                </div>
              </div>
            </div>

            <div className="category-card rounded-xl overflow-hidden shadow-md bg-white cursor-pointer">
              <div className="relative h-48">
                <div className="category-image h-full w-full bg-amber-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <div className="category-overlay absolute inset-0 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-xl font-bold text-white">Pastries</h3>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm">Flaky, buttery pastries from croissants to Danish treats</p>
                <div className="mt-3 flex justify-end">
                  <button className="text-amber-500 hover:underline font-medium text-sm">View All</button>
                </div>
              </div>
            </div>

            <div className="category-card rounded-xl overflow-hidden shadow-md bg-white cursor-pointer">
              <div className="relative h-48">
                <div className="category-image h-full w-full bg-red-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                  </svg>
                </div>
                <div className="category-overlay absolute inset-0 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-xl font-bold text-white">Candy</h3>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm">Sweet treats from fudge to caramels and chocolate confections</p>
                <div className="mt-3 flex justify-end">
                  <button className="text-red-400 hover:underline font-medium text-sm">View All</button>
                </div>
              </div>
            </div>

            <div className="category-card rounded-xl overflow-hidden shadow-md bg-white cursor-pointer">
              <div className="relative h-48">
                <div className="category-image h-full w-full bg-yellow-50 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="category-overlay absolute inset-0 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-xl font-bold text-white">Custard</h3>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm">Smooth and creamy custards from crème brûlée to flan</p>
                <div className="mt-3 flex justify-end">
                  <button className="text-yellow-400 hover:underline font-medium text-sm">View All</button>
                </div>
              </div>
            </div>

            <div className="category-card rounded-xl overflow-hidden shadow-md bg-white cursor-pointer">
              <div className="relative h-48">
                <div className="category-image h-full w-full bg-orange-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                </div>
                <div className="category-overlay absolute inset-0 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-xl font-bold text-white">Fried Desserts</h3>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm">Crispy and indulgent treats from donuts to churros</p>
                <div className="mt-3 flex justify-end">
                  <button className="text-orange-500 hover:underline font-medium text-sm">View All</button>
                </div>
              </div>
            </div>

            <div className="category-card rounded-xl overflow-hidden shadow-md bg-white cursor-pointer">
              <div className="relative h-48">
                <div className="category-image h-full w-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div className="category-overlay absolute inset-0 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-xl font-bold text-white">Frozen Desserts</h3>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm">Cool treats from ice cream to sorbets and frozen yogurt</p>
                <div className="mt-3 flex justify-end">
                  <button className="text-blue-400 hover:underline font-medium text-sm">View All</button>
                </div>
              </div>
            </div>

            <div className="category-card rounded-xl overflow-hidden shadow-md bg-white cursor-pointer">
              <div className="relative h-48">
                <div className="category-image h-full w-full bg-purple-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                </div>
                <div className="category-overlay absolute inset-0 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-xl font-bold text-white">Gelatin Desserts</h3>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm">Jiggly treats from classic jello to elegant panna cotta</p>
                <div className="mt-3 flex justify-end">
                  <button className="text-purple-400 hover:underline font-medium text-sm">View All</button>
                </div>
              </div>
            </div>

            <div className="category-card rounded-xl overflow-hidden shadow-md bg-white cursor-pointer">
              <div className="relative h-48">
                <div className="category-image h-full w-full bg-green-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                  </svg>
                </div>
                <div className="category-overlay absolute inset-0 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-xl font-bold text-white">Fruit Desserts</h3>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm">Fresh and fruity treats from cobblers to fruit salads</p>
                <div className="mt-3 flex justify-end">
                  <button className="text-green-500 hover:underline font-medium text-sm">View All</button>
                </div>
              </div>
            </div>

            <div className="category-card rounded-xl overflow-hidden shadow-md bg-white cursor-pointer">
              <div className="relative h-48">
                <div className="category-image h-full w-full bg-amber-50 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="category-overlay absolute inset-0 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-xl font-bold text-white">Pies</h3>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm">From fruit pies to cream pies and everything in between</p>
                <div className="mt-3 flex justify-end">
                  <button className="text-amber-600 hover:underline font-medium text-sm">View All</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

