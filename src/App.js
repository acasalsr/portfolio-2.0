import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ReactComponent from "./pages/ReactComponent";
import UxDesign from "./pages/UxDesign";
import Webflow from "./pages/Webflow";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import Layout from "./components/MainMenu";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <BrowserRouter basename="/portfolio-2.0">
        <div id="wrapper-overflow">
          <Layout />
          <Routes>
            <Route path="/" index element={<HomePage />} />
            <Route path="ux-design" element={<UxDesign />} />
            <Route path="webflow" element={<Webflow />} />
            <Route path="react" element={<ReactComponent />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}
