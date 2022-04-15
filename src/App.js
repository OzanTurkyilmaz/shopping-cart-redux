import { connect } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from './components/Products'
import Cart from './components/Cart'
import './App.css';

const App = (props) => {
  
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path='/' element={<Products />} />
      <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    bookList: state.bookList
  }
}

export default connect(mapStateToProps)(App);
