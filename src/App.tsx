import { Header } from "./Headers/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeroPage } from "./HeroPage";
import { ProductsContext } from "./context/ProductsContext";
import { ModelCart } from "./ModelCart";

function App() {
  return (
    <>
      <ProductsContext>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" Component={HeroPage} />
            <Route path="/model" Component={ModelCart} />
          </Routes>
        </BrowserRouter>
      </ProductsContext>
    </>
  );
}

export default App;
