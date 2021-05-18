import "./App.css";
import Header from "./components/Header";
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Home />
        <Route exact path='/contact' component={Contact} />
        <Footer />

      </Router>
    </div>
  );
}

export default App;
