import Features from "../sections/Features/Features";
import Hero from "../sections/Hero/Hero";
import HowItWorks from "../sections/HowItWorks/HowItWorks";
import Navbar from "../sections/Navbar/Navbar";

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
    </main>
  );
}

export default Home;
