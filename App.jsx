const { HashRouter, Routes, Route, Link } = ReactRouterDOM;

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </HashRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
