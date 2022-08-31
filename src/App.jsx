import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import CartProvider from './context/CartContext.js'
import NavBar from './components/NavBar'
import ItemListContainer from './components/Container/ItemListContainer';
import Cart from './components/Container/Cart';
import ItemDetailContainer from './components/Container/ItemDetailContainer';
import NotFound from './components/NotFound';
import OrderContainer from './components/Container/OrderContainer';
import WhatsappWidget from './components/Widgets/WhatsappWidget/WhatsappWidget';
import Footer from './components/Footer';
import Authentication from './components/auth/Authentication'
import { AuthProvider } from './context/AuthContext.js';
import ForgotPassword from './components/ForgotPassword';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
            <NavBar/>
              <Routes>
                <Route index path='/' element={<ItemListContainer/>}/>
                <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>
                <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
                <Route path='/auth' element={<Authentication/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/404' element={<NotFound/>}/>
                <Route path='*' element={<Navigate to='/404'/>}/> 
                <Route path='/order' element={<OrderContainer/>}/>
                <Route path='/order/:idOrder' element={<OrderContainer/>} />
                <Route path='/forgotpassword' element={<ForgotPassword/>}/>
              </Routes>
            <Footer/>
            <WhatsappWidget/>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  )
}

export default App