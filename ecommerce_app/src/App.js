import './App.css';
import Navbar from './components/Navbar';
import Store from './components/Store';

function ListItem(props){
  return(<li>Todo: {props.text}</li>)

}
function App() {

  const StoreItems = ["Computer", "Books", "Cookie"]

  const todo = ["play game", "beat game", "beat it agin"]
  return (
 <>
 <div></div>
<Store items = {StoreItems}></Store>
 </>
  );
}

export default App;
