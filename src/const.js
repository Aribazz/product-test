export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PROUCT = 'REMOVE_PROUCT';

// actions
export const addProduct=(product)=>({
    type:ADD_PRODUCT,
    payload:product
})

export const removeProduct=(productId)=>({
    type:REMOVE_PROUCT,
    payload:{
        id:productId
    }
})