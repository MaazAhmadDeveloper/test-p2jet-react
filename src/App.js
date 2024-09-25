import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./all components and pages/homePage/Home";
import Header from "./all components and pages/components/Header/Header";
import Footer from "./all components and pages/components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/other" element={<h1>Hello other</h1>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
