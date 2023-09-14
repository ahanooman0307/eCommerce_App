import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Store from './components/Store';
import axios from 'axios';import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [storeItem, setStoreItem] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(({ data }) => {
      setloading(false);
      setStoreItem(data);
    });
  }, []);

  return (
  
      <Routes>
        <Route path="/" Component={(props) => (
        <Store
          items={storeItem}
          loading={loading}
          onItemAdd={(itemData) => {
            setStoreItem([...storeItem, itemData]);
        }}
        />
        )}
         />
        <Route path = "/product/:id" Component={props => <Product {...props}></Product>}></Route>
      </Routes>

  );
}

export default App;
