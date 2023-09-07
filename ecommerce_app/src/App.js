import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Store from './components/Store';


function App() {
const [storeItem, setStoreItem] = useState([ 
 
    {
      title: "Hat",
      price: 5
    },
    {
      title: "Shoe",
      price: 20
    },
    {
      title: "Shirt",
      price: 15
    },
  ]
);
  

 
  return (
 <div>
<Store items = {storeItem}
 onItemAdd = {(itemData) => {
  setStoreItem([...storeItem, itemData])

}}
/>
</div>
  );
}

export default App;
