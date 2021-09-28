import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './Product.css'
import Rating from 'react-rating';
const Product = (props) => {
 const {name,category,price,seller,stock,img,star} = props.product;
 const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
 return (
   <div className="product">
     <div className="product-img">
       <img src={img} alt="" />
     </div>
     <div>
       <h3>{name}</h3>
       <h4>category : {category}</h4>
       <p>by {seller}</p>
       <h3>${price}</h3>
       <p>only {stock} left in stock - order soon</p>
       <Rating 
       initialRating={star}
       emptySymbol="far fa-star star-icon" 
       fullSymbol="fas fa-star star-icon" 
       readonly/>
       <br />
       <br />
       <button
         className="btn-primary"
         onClick={() => props.handleAddToCart(props.product)}
       >
         {cartIcon} Add to Cart
       </button>
     </div>
   </div>
 );
};

export default Product;