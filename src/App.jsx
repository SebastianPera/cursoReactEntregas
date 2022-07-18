import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import CartProvider from './context/CartContext.js'
import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/Container/ItemListContainer';
import Cart from './componentes/Container/Cart';
import ItemDetailContainer from './componentes/Container/ItemDetailContainer';
import NotFound from './componentes/NotFound';
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
            <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
            <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/404' element={<NotFound/>}/>
            <Route path='*' element={<Navigate to='/404'/>}/> 
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App