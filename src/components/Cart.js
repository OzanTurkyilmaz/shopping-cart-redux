import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Style.css"

const Cart = (props) => {
  const totalPrice = props.cart.reduce((total, item) => (total += item.price), 0)
  return (
    <div className="container">
      <h2>
        <Link to="/">Book List</Link> <span>My Cart</span>
      </h2>

      <h3>Total Amount: &#8378;{totalPrice.toFixed(2)}</h3>
      <div>
        
      </div>

      {props.cart.map(book => (
        <div key={book.id} className="book">
        <img className="book_image"
          src={book.image}
          alt={book.name}
        />
        <div>
          <h4>{book.name}</h4>
          <p>Author: {book.author}</p>
          <p>Price: &#8378;{book.price}</p>
          <button>-</button>
          <button>Remove From Cart</button>
          <button>+</button>
        </div>
      </div>
      ))}

      
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Cart);
