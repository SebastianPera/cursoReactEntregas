import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import CartProvider from './context/CartContext.js'
import NavBar from './components/NavBar'
import ItemListContainer from './components/Container/ItemListContainer';
import Cart from './components/Container/Cart';
import ItemDetailContainer from './components/Container/ItemDetailContainer';
import NotFound from './components/NotFound';
import { OrderForm } from './components/Container/Order';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route index path='/' element={<ItemListContainer/>}/>
            <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<OrderForm/>}></Route>
            <Route path='/404' element={<NotFound/>}/>
            <Route path='*' element={<Navigate to='/404'/>}/> 
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App