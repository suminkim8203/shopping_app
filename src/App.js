import HomePage from "pages/HomePage";
import ProductPage from "pages/ProductPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/:productId" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
