import React, { useState } from "react";
import ProductCart from "./ProductCart";
import { product } from "../../assets/data/data";
import { AiOutlineSearch } from 'react-icons/ai';
import './../header/header.css';
import "./product.css";

const Product = () => {
  const [value, setValue] = useState("");

  const filter = product.filter(product => {
    return product.name.toLowerCase().includes(value.toLowerCase())
  });

  return (
    <>
      <div className="search flex">
        <AiOutlineSearch className='searchIcon' />
        <input type="text" placeholder='Find something...' value={value} onChange={e => setValue(e.target.value)} />
      </div>
      <section className='product'>
        <div className='container grid3'>
          {filter.map((item) => (
            <ProductCart key={item.id} id={item.id} cover={item.cover} name={item.name} price={item.price} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Product;