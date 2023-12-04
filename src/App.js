import './App.css';
import Menu from "./companent/menu/Menu";
import Home from "./companent/home/home";
import Footer from "./companent/footer/footer";
import Contacs from "./companent/contacs/contacs";
import Higher_footer from "./companent/higher_footer/higher_footer";
import Products from "./companent/products/products";
function App() {
  return (
      <div>
          <Menu />
          <Products />
          <Higher_footer />
          <Footer />
      </div>
  );
}

export default App;
