import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/Container/ItemListContainer/ItemListContainer';
import Cart from './componentes/Container/Cart/Cart';
import ItemDetailContainer from './componentes/Container/ItemDetailContainer/ItemDetailContainer';
import NotFound from './componentes/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
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
  )
}

export default App