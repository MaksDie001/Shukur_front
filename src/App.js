import './App.css';
import Menu from "./companent/menu/Menu";
import Home from "./companent/home/home";
import Footer from "./companent/footer/footer";
import Higher_footer from "./companent/higher_footer/higher_footer";
import Source_mechit from "./companent/source_mechit/Source_mechit";
function App() {
  return (
      <div>
          <Menu />
          <Source_mechit />
          <Higher_footer />
          <Footer />
      </div>
  );
}

export default App;
