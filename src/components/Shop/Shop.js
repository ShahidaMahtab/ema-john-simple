import React, { useEffect, useState } from 'react';
import { addToDb, getDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
 const [products,setProducts] = useState([]);
 const [cart, setCart] = useState([]);
 const [displayProducts, setDisplayProducts] = useState([]);
 useEffect(()=>{
  fetch('./products.json')
  .then(res=>res.json())
  .then(data=>{
   setProducts(data);
   setDisplayProducts(data);
  });
 },[])
 useEffect(()=>{
 if(products.length){
   const savedDb = getDb();
   const displayDb = [];
   for(const id in savedDb){
      const product = products.find(pd=>pd.key === id);
      const quantity = savedDb[id];
      product.quantity = quantity;
      displayDb.push(product);
   }
   setCart(displayDb);
 }
 },[products])
 const handleAddToCart = newProduct =>{
   const exists = cart.find(pd=>pd.key === newProduct.key);
   let newCart = [...cart];
   if(exists){
     exists.quantity = newProduct.quantity +1;
     setCart(newCart);
   }else{
     newProduct.quantity = 1;
     newCart = [...cart,newProduct];
     setCart(newCart)
   }
  /* const newCart = [...cart,newProduct];
  setCart(newCart); */
  addToDb(newProduct.key)
 }
 const handleSearch = event =>{
  const searchText = event.target.value;
 const matchedProducts = products.filter((product) =>
   product.name.toLowerCase().includes(searchText.toLowerCase())
 );
  setDisplayProducts(matchedProducts);
 }
 return (
   <>
     <div className="search-container">
       <input
         type="text"
         onChange={handleSearch}
         placeholder="search product"
       />
     </div>
     <div className="shop">
       <div className="product-container">
         <h3>Products Available : {products.length}</h3>
         {
          displayProducts.map((product) => (
           <Product
             key={product.key}
             product={product}
             handleAddToCart={handleAddToCart}
           ></Product>
         ))}
       </div>
       <div className="cart-container">
         <Cart cart={cart}></Cart>
       </div>
     </div>
   </>
 );
};

export default Shop;