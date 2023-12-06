import './App.css';
import Menu from "./companent/menu/Menu";
import Home from "./companent/home/home";
import Footer from "./companent/footer/footer";
import Higher_footer from "./companent/higher_footer/higher_footer";
import Product_info from "./companent/product_info/product_info";
function App() {
  return (
      <div>
          <Menu />
          <Product_info />
          <Higher_footer />
          <Footer />
      </div>
  );
}

export default App;
