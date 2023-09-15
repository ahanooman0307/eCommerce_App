import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Store from './components/Store';
import axios from 'axios';import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {


  return (
  
      <Routes>
        <Route path="/" Component={(props) => (
        <Store
        //   items={storeItem}
        //   loading={loading}
        //   onItemAdd={(itemData) => {
        //     setStoreItem([...storeItem, itemData]);
        // }} 
        />
        )}
         />
        <Route path = "/product/:id" element={<Product/>}></Route>
      </Routes>

  );
}

export default App;
