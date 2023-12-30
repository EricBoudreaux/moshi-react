import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Reservations from "./components/Reservations";
import Reviews from "./components/Reviews";
import Social from "./components/Social";
import Story from "./components/Story";
import TickerBar from "./components/TickerBar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TickerBar />
      <Home />
      <Menu />
      <Story />
      <Reviews />
      <Reservations />
      <Social />
      <Footer />
    </>
  );
}

export default App;
