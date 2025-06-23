function About() {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pastel-gradient py-16 md:py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Meet Our Team</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            The passionate bakers and developers behind BASTA Desserts
          </p>
          <div className="w-24 h-1 bg-pink-300 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              BASTA Desserts was founded by a group of passionate college students who shared a love for baking and technology.
              What started as a small project for a web development class quickly turned into a platform where dessert enthusiasts
              could find, share, and create delicious recipes. Our team combines diverse skills to bring you the sweetest online experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-600">Making baking accessible and enjoyable for everyone, from beginners to experts.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-600">Creating the world's most comprehensive and user-friendly dessert recipe platform.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💝</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <p className="text-gray-600">Quality recipes, community support, and the joy of sharing sweet moments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Meet The Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            <div className="team-member bg-white rounded-xl overflow-hidden shadow-md">
              <div className="member-image h-64 bg-green-200 flex items-center justify-center">
                <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Billie Earl Angeles" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-800">Billie Earl Angeles</h3>
                <p className="text-green-500 font-medium mb-3">Computer Engineering</p>
                <p className="text-gray-600 mb-4">A dedicated Full-stack developer and Cyber Security Major that ensures quality and speed above all else.</p>
                <a href="#" className="text-green-500 font-medium hover:underline">View Portfolio</a>
              </div>
            </div>

            <div className="team-member bg-white rounded-xl overflow-hidden shadow-md">
              <div className="member-image h-64 bg-blue-200 flex items-center justify-center">
                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Jerico Armendi" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-800">Jerico Armendi</h3>
                <p className="text-blue-500 font-medium mb-3">Computer Engineering</p>
                <p className="text-gray-600 mb-4">A computer engineering student passionate about front-end development and user experience design.</p>
                <a href="#" className="text-blue-500 font-medium hover:underline">View Portfolio</a>
              </div>
            </div>

            <div className="team-member bg-white rounded-xl overflow-hidden shadow-md">
              <div className="member-image h-64 bg-purple-200 flex items-center justify-center">
                <img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400" alt="John Vincent Baga" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-800">John Vincent Baga</h3>
                <p className="text-purple-500 font-medium mb-3">Computer Engineering</p>
                <p className="text-gray-600 mb-4">Computer Engineering student with a focus on Data Science, now diving into backend development to broaden my technical toolkit.</p>
                <a href="#" className="text-purple-500 font-medium hover:underline">View Portfolio</a>
              </div>
            </div>

            <div className="team-member bg-white rounded-xl overflow-hidden shadow-md">
              <div className="member-image h-64 bg-yellow-200 flex items-center justify-center">
                <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Abdul Didaagun" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-800">Abdul Didaagun</h3>
                <p className="text-yellow-500 font-medium mb-3">Computer Engineering</p>
                <p className="text-gray-600 mb-4">Back-end developer that is passionate about building seamless and scalable solutions and specializes in the art of back-end development.</p>
                <a href="#" className="text-yellow-500 font-medium hover:underline">View Portfolio</a>
              </div>
            </div>

            <div className="team-member bg-white rounded-xl overflow-hidden shadow-md">
              <div className="member-image h-64 bg-red-200 flex items-center justify-center">
                <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Anton Ramos" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-800">Anton Ramos</h3>
                <p className="text-red-500 font-medium mb-3">Computer Engineering</p>
                <p className="text-gray-600 mb-4">An aspiring Software Engineer, with prior experience working with modern web development frameworks such as Django, Flask, Vue.js, and React.js.</p>
                <a href="#" className="text-red-500 font-medium hover:underline">View Portfolio</a>
              </div>
            </div>

            <div className="team-member bg-white rounded-xl overflow-hidden shadow-md">
              <div className="member-image h-64 bg-pink-200 flex items-center justify-center">
                <img src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Paula Nicole Reyes" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-800">Paula Nicole Reyes</h3>
                <p className="text-pink-500 font-medium mb-3">Computer Engineering</p>
                <p className="text-gray-600 mb-4">A dedicated developer specialized in System Administration. Explore my projects and skills in the portfolio.</p>
                <a href="#" className="text-pink-500 font-medium hover:underline">View Portfolio</a>
              </div>
            </div>

            <div className="team-member bg-white rounded-xl overflow-hidden shadow-md">
              <div className="member-image h-64 bg-orange-200 flex items-center justify-center">
                <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400" alt="John Michael Villarosa" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-800">John Michael Villarosa</h3>
                <p className="text-orange-500 font-medium mb-3">Computer Engineering</p>
                <p className="text-gray-600 mb-4">A forward-thinking computer engineering student passionate about systems optimization and AI innovation. Bridging theory and practice with purposeful code.</p>
                <a href="#" className="text-orange-500 font-medium hover:underline">View Portfolio</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 pastel-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Want to Get in Touch?</h2>
          <p className="text-lg text-gray-700 mb-8">
            We'd love to hear from you! Whether you have questions, suggestions, or just want to say hello.
          </p>
          <a 
            href="/#contact" 
            className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}