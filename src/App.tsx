import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home/Home';
import ProductDetail from './views/ProductDetail/ProductDetail';
function App() {


  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
