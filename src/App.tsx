import { BrowserRouter, Route, Routes } from "react-router-dom"
import Products from "./components/products"
import Recipes from "./components/recepies"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
