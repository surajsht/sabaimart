import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
};

export default App;
