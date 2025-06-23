function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <span className="footer-text text-2xl font-bold">BASTA Desserts</span>
            <p className="text-gray-400 text-sm mt-2">Delicious recipes for every sweet tooth</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <div className="space-y-2">
              <p><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></p>
              <p><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></p>
              <p><a href="#" className="text-gray-400 hover:text-white transition">Contact Support</a></p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">&copy; 2025 BASTA Desserts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}