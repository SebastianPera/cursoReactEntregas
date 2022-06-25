
// import './componentes/NavBar'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/Container/ItemListContainer/ItemListContainer';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'App en construcción'}/>
    </div>
  )
}

export default App
