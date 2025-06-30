import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SamplePage from "./pages/SamplePage";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* === PAGE ROUTING === */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sample" element={<SamplePage />} />
        </Route>

        {/* === 404 ROUTING === */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
