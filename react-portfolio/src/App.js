import "./App.css";
import Header from "./components/Header";
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from './pages/Contact';
import Portfolio from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/portfolio' component={Portfolio} />

        <Footer />

      </Router>
    </div>
  );
}

export default App;
