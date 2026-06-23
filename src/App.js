import ProductInterface from "./compoenent/ProductInterface";
import DisplayProduct from "./compoenent/DisplayProduct";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (

    <div className="App">
      <Router>
        <Routes>
          <Route element={<ProductInterface />} path="/productinterface" />
          <Route element={<DisplayProduct />} path="/displayproduct" />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
