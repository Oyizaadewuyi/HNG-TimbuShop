import React from "react";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
// import Header from "./components/Header/Header";
// import Hero from "./components/Hero/Hero";
// import Footer from "./components/Header/Footer/Footer";
// import ProductPage from "./components/Product/ProductPage"
import TimbuLanding from "./pages/TimbuLanding";
// import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage";


function App() {
  return (
    <div>
      
    <BrowserRouter>
      <Routes>
        <Route index element={<TimbuLanding />} />
           {/* <Route path="Shoppingcart" element={<ShoppingCartPage />} /> */}
        </Routes>
			</BrowserRouter>
		</div>
   
       
     
  );
}
    
  


export default App;
