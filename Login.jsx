function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleLogin = () => {
    if (email && password) {
      alert('Login successful! Welcome to BASTA Desserts.');
    } else {
      alert('Please enter both email and password.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="login-card bg-white rounded-2xl shadow-xl overflow-hidden max-w-md w-full">
          <div className="pastel-gradient h-3"></div>
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
              <p className="text-gray-600">Sign in to access your favorite recipes</p>
            </div>
            <form className="space-y-6" onSubmit={(e)=>e.preventDefault()}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input id="email" name="email" type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} className="form-input w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input id="password" name="password" type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} className="form-input w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300" placeholder="••••••••" />
              </div>
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-purple-500 focus:ring-purple-400 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Remember me</label>
              </div>
              <div>
                <button type="button" onClick={handleLogin} className="btn-hover-effect w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white font-medium bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400">
                  Sign in
                </button>
              </div>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/signup" className="font-medium text-purple-500 hover:text-purple-600">Sign up now</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

