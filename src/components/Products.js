import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../actions";
import "./Style.css"

const Products = props => {
  
  return (
    <div>
      <h2>
        <span>Book List</span>
        <Link to="/cart">My Cart</Link>
      </h2>

      {
        props.bookList.map(book => (
          <div key={book.id} className="book">
        <img className="book_image"
          src={book.image}
          alt={book.name}
        />
        <div>
          <h4>{book.name}</h4>
          <p>Author: {book.author}</p>
          <p>Price: &#8378; {book.price}</p>
          <button onClick={() => props.addToCart(book)}>Add To Cart</button>
        </div>
      </div>
        ))
      }

      
    </div>
  );
};

const mapStateToProps = state => {
    return {
      bookList: state.bookList ,
      cart: state.cart
    }
  }

export default connect(mapStateToProps , {addToCart})(Products);
