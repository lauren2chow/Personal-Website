import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>

function App() {
  return (
    <div className="App">
      <NavBar />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;