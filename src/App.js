import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Destination from "./Components/Destination/Destination";
import Search from "./Components/Search/Search";
import Select from "./Components/Select/Select";
import ImgCarousel from "./Components/Carousel/ImgCarousel";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destination />
      <Search />
      <Select />
      <ImgCarousel />
      <Footer />
    </div>
  );
}

export default App;
