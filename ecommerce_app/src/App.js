import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Store from './components/Store';
import axios from 'axios';


function App() {
const [storeItem, setStoreItem] = useState([ 
 
  ]
);

const [loading, setloading] = useState(true);
  

useEffect(() =>{
  axios.get("https://fakestoreapi.com/products").then(({data}) =>{
  setloading(false);
  setStoreItem(data)
})
}, [])

 
  return (
 <div>
<Store items = {storeItem}
loading = {loading}
 onItemAdd = {(itemData) => {
  setStoreItem([...storeItem, itemData]) //sets storeItem with the old storeitem plus the new item 

}}
/>
</div>
  );
}

export default App;
