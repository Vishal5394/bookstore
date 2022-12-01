import './App.css';
import Signin from './component/signin';
import Signup from './component/signup';
import Lender from './pages/lender';
import Header from './component/header/header';
import Books from './component/books/books';
import Dashboard from './component/dashboard/dashboard';
import Book01 from './component/book01/book01';
import Counter from './component/counter';
import Cart from './component/cart/cart';
import Address from './component/cart/address';
import Order from './component/cart/order';
import Router from './component/router/router';
import Orderplaced from './component/orderplaced/orderplaced';
import Wishlist from './component/wishlist/wishlist';
import Head from './component/header/head';

function App() {
  return (
    
    <div className="App">
      {/* <Signin/> */}
      {/* <Signup/> */}
      {/* <Lender/> */}
      {/* <Header/> */}
      {/* <Books/> */}
      {/* <Dashboard/> */}
      {/* <Book01/> */}
      {/* <Counter/> */}
      {/* <Cart/> */}
      {/* <Address/> */}
      {/* <Order/> */}
      <Router/>
      {/* <Orderplaced/> */}
      {/* <Wishlist/> */}
      {/* <Head/> */}
     
    </div>
  );
}

export default App;
