import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'
// Productdetail: id, name,type,description,status,datecreated
export default function ProductList() {
    const productList= useSelector(state=>state.products.productList)

    return (<section className='product-list'> 
        {productList.map(product=>(
           <Product  product={product} key={product.id} />
        ))}</section>)
}