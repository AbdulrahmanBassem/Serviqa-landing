import Navbar from '../sections/Navbar/Navbar';

function Home() {
  return (
    <main>
      <Navbar />
      
      {/* 
        Temporary placeholder divs with IDs so we can test the smooth scrolling 
        from the Navbar before we build the actual sections.
      */}
      <section id="hero" style={{ height: '100vh', padding: '100px' }}>
        <h1>Hero Section (Coming Soon)</h1>
      </section>
      
      <section id="features" style={{ height: '100vh', background: '#fff', padding: '100px' }}>
        <h2>Features Section</h2>
      </section>
      
      <section id="how-it-works" style={{ height: '100vh', padding: '100px' }}>
        <h2>How It Works Section</h2>
      </section>
    </main>
  );
}

export default Home;