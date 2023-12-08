import './App.css';
import Menu from "./companent/menu/Menu";
import Home from "./companent/home/home";
import Footer from "./companent/footer/footer";
import Higher_footer from "./companent/higher_footer/higher_footer";
import User_Profile from "./companent/User_profile/User_Profile";
import Products from "./companent/products/products";
function App() {
  return (
      <div>
          <Menu />
          <User_Profile />
          <Higher_footer />
          <Footer />
      </div>
  );
}

export default App;
