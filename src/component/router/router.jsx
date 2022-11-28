import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Lender from '../../pages/lender';
import Dashboard from '../dashboard/dashboard';
import Cart from '../cart/cart';
import Orderplaced from '../orderplaced/orderplaced'
import Wishlist from '../wishlist/wishlist';


function Router1() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Lender/>}/>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/placeorder' element={<Orderplaced/>}/>
                    <Route path='/wishlist' element={<Wishlist/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default Router1;