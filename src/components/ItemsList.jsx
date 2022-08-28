import Item from './Item';
import '../styles/ItemList.css'


function ItemsList({ prod }) {
  return(
    <div className="containerGreeting">
      {prod.map((element) => (
        <Item products={element} key={element.id} />
      ))}
    </div>
  );
}

export default ItemsList;