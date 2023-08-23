import React from 'react'
import { useSelector } from 'react-redux'
// Productdetail: id, name,type,description,status,datecreated
export default function Product({product}) {

    return (<div className='product-list__item'>
             <h2 className='title'>{product.title}</h2>
            
            <div className='container'>

            <p className='type'>{product.type}</p>
            <p className='status'>{product.status}</p>
            </div>
            <p className='description'>{product.description}</p>
            <p className='date'>{product.dateCreated.toString()}</p>
    </div>)
}