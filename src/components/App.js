import Analytics from "./Analytics";
import Cards from "./Cards";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
};
export default App;
