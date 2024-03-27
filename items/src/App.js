import logo from './logo.svg';
import './App.css';

function App() {
  return  <div>
    <h1>Items List</h1>
<section className="User">
    <Item name="Dal" price="50" quality="Good"/>
    <Item  name="Rice" price="150" quality="bad"  />
    <Item  name="Flour" price="100" quality="good"  />
    </section>
  </div>
}



function Item(props) {
  return <div className="item">
    <h1>{props.name}</h1>
    <p> Price: {props.price}</p>
    <p> Quality: {props.quality}</p>



  </div>

}

export default App;
