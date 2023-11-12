import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import Navbar from './Components/Navbar/Navbar';
import Product from "./Pages/Product";
import { Provider } from "react-redux";
import store from "./Store";
import Cart from "./Pages/Cart";

function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
