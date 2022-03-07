import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import ReactComponent from "./pages/ReactComponent";
import UxDesign from "./pages/Uxdesign";
import Webflow from "./pages/Webflow";

export default function App() {
  return (
    <>
      <h1>{<Webflow />}</h1>
      <h1>{<ReactComponent />}</h1>
      <h1>{<UxDesign />}</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/ux-desing" element={<UxDesign />} />
            <Route path="/webflow" element={<Webflow />} />
            <Route path="/react" element={<ReactComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
