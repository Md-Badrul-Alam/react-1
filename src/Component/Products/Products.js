import React from "react";
import "./Products.css";
import { BsCart4 } from "react-icons/bs";

const Products = ({ product, handlerAddToCart }) => {
   const { img, name, price, seller, ratings } = product;
   return (
      <div className="product">
         <img src={img} alt="" />
         <div className="product-details">
            <p className="name">{name}</p>
            <p>Price: {price}</p>
            <p>
               <small>Seller: {seller}</small>
            </p>
            <p>
               <small>Ratting: {ratings}</small>
            </p>
            <button
               onClick={() => handlerAddToCart(product)}
               className="btn-cart"
            >
               <p className="btn-text">
                  <span>
                     <BsCart4 />
                  </span>
                  Add to Cart
               </p>
            </button>
         </div>
      </div>
   );
};

export default Products;
