import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css';
import ProductList from "./components/ProductList/ProductList";
import products from "./ProductData/products";
import Footer from "./components/Footer/Footer";

function App() {
  return (
   <div className="App">
       <Header/>
    <Hero/>
    <ProductList/>
    <Footer/>
     </div>

   
       
     
  );
}
    
  


export default App;
