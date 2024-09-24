import Products from "./Products/Products.js";
import Navigation from "./Navigation/Navigation.js";
import Recommend from "./Recommended/Recommend.js";
import Sidebar from "./Sidebar/Sidebar.js";

import Category from "./Sidebar/Category/Category.js";

import React from 'react';
import { useState } from "react";

// database
import Card from "./components/Card.js";
import products from "./db/data.js";



function App() {
  // this is for radio buttons and buttons
  const [selectedCategory,setSelectedCategory] = useState(null);
  // this is for searched content
  const [query,setQuery] = useState('');

  //----------- input Filter----------
  const handleInputChange =(event)=>{
    setQuery(event.target.value)
  }

  // iterate through all products,take each product,take its title convert to lowercase 
  // convert query in lowercase if it exits in array ,take its title to filtereditems 
  const filteredItems = products.filter((product) =>
  product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!==-1);

  // --------Radio Filters--------
  const handleChange = (event)=>{
    setSelectedCategory(event.target.value);
  }

  // ------Buttons Filter----------
  const HandleClick = event=>{
    setSelectedCategory(event.target.value);}

  // This is the function which return filtered items
  function filteredData(products,selected,query){
    let filteredProducts = products;

    // filtering input items(searched content)
    if (query){
      filteredProducts = filteredItems;
    };

    // selected filter
    if(selected){
      filteredProducts = filteredProducts.filter(
        ({category,color,company,newPrice,title}) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
        
      );
    };

    return filteredProducts.map(({img,title,star,reviews,prevPrice,newPrice}) =>(
      <Card
      key = {Math.random()}
      img = {img}
      title = {title}
      star = {star}
      reviews = {reviews}
      prevPrice = {prevPrice}
      newPrice = {newPrice}

      />

    ));
  };


  
  const result = filteredData(products,selectedCategory,query);

  return (
    <>
    <Sidebar handleChange={handleChange}/>
    <Navigation query={query} handleInputChange={handleInputChange}/>
    <Recommend HandleClick = {HandleClick}/>
    <Products result={result}/>
    
    
    </>
  );
}

export default App;
