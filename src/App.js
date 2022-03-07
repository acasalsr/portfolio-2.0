import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import ReactComponent from "./pages/ReactComponent";
import UxDesign from "./pages/UxDesign";
import Webflow from "./pages/Webflow";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div id="wrapper-overflow">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/ux-desing" element={<UxDesign />} />
              <Route path="/webflow" element={<Webflow />} />
              <Route path="/react" element={<ReactComponent />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
