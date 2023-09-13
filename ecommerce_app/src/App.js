import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Store from './components/Store';
import axios from 'axios';
import { Router, Route, Routes, Link } from 'react-router-dom'; // Import Routes and Route from 'react-router-dom'
import { Switch } from '@chakra-ui/react';
import Header from './components/Header';

function App() {
  const [storeItem, setStoreItem] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(({ data }) => {
      setloading(false);
      setStoreItem(data);
    });
  }, []);

  const StoreView = (
    <Store
      items={storeItem}
      loading={loading}
      onItemAdd={(itemData) => {
        setStoreItem([...storeItem, itemData]);
      }}
    />
  );

  return (
    <>
      <Routes>
       
        <Route path="/" element= {<Header></Header>}></Route>
        <Route path="/about">About</Route>
       

      </Routes>
    </>
  );
}

export default App;
