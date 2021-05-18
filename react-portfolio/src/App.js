import "./App.css";
import Header from "./components/Header";
import Footer from './components/Footer';
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Home />
        <Footer />

      </Router>
    </div>
  );
}

export default App;
