import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import { popularProducts } from "../data";

const Home = () => {

  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products data={popularProducts.slice(0,8)} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
