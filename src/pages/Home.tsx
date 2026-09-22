import Features from '../sections/Features/Features';
import Hero from '../sections/Hero/Hero';
import Navbar from '../sections/Navbar/Navbar';

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />      
      <section id="how-it-works" style={{ height: '100vh', padding: '100px' }}>
        <h2>How It Works Section</h2>
      </section>
    </main>
  );
}

export default Home;