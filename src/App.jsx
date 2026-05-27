import Hero from './components/Hero';
import TrustIntroScroll from './components/TrustIntroScroll';
import DeserveMore from './components/DeserveMore';
import DoMoreCreditCards from './components/DoMoreCreditCards';
import FeaturesHorizontalScroll from './components/FeaturesHorizontalScroll';
import Ratings from './components/Ratings';
import Security from './components/Security';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-credDark text-white min-h-screen font-sans antialiased selection:bg-white selection:text-black overflow-x-hidden">
      <Hero />
      <TrustIntroScroll />
      <DeserveMore />
      <DoMoreCreditCards />
      <FeaturesHorizontalScroll />
      <Ratings />
      <Security />
      <Footer />
    </div>
  );
}

export default App;