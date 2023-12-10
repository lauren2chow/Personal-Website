import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import {Helmet} from "react-helmet";
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lauren Chow</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="icon and title" />
      </Helmet>
      <NavBar />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;