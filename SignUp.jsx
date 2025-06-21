function SignUp() {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirm, setConfirm] = React.useState('');
  const handleSignUp = (e) => {
    e.preventDefault();
    if (username && email && password && password === confirm) {
      alert('Account created!');
    } else {
      alert('Please complete the form correctly.');
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
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Create an Account</h2>
              <p className="text-gray-600">Join us and start saving your favorite recipes</p>
            </div>
            <form className="space-y-6" onSubmit={handleSignUp}>
              <div>
                <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <input id="fullname" name="fullname" type="text" required value={username} onChange={(e)=>setUsername(e.target.value)} className="form-input w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300" placeholder="Your Username" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input id="email" name="email" type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} className="form-input w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input id="password" name="password" type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} className="form-input w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300" placeholder="••••••••" />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <input id="confirm-password" name="confirm-password" type="password" required value={confirm} onChange={(e)=>setConfirm(e.target.value)} className="form-input w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300" placeholder="••••••••" />
              </div>
              <div>
                <button type="submit" className="btn-hover-effect w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white font-medium bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400">
                  Sign Up
                </button>
              </div>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="font-medium text-purple-500 hover:text-purple-600">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

