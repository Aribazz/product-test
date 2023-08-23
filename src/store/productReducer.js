import { ADD_PRODUCT, REMOVE_PROUCT } from "../const"

const initialState ={
    productList:[
        {
        id:'678541',
        title:'Bag',
        description:'A very fine bag',
        dateCreated:new Date(),
        type:'Accessory',
        status:'ACTIVE',

    },
    {
        id:'678542',
        title:'Bag',
        description:'A very fine bag',
        dateCreated:new Date(),
        type:'Accessory',
        status:'ACTIVE',

    },
    {
        id:'678543',
        title:'Bag',
        description:'A very fine bag',
        dateCreated:new Date(),
        type:'Accessory',
        status:'ACTIVE',

    },
    {
        id:'678544',
        title:'Bag',
        description:'A very fine bag',
        dateCreated:new Date(),
        type:'Accessory',
        status:'ACTIVE',

    },
    {
        id:'678545',
        title:'Bag',
        description:'A very fine bag',
        dateCreated:new Date(),
        type:'Accessory',
        status:'ACTIVE',

    },
]
}

const productsReducer= (state=initialState,action)=>{
    switch(action.type){
        case ADD_PRODUCT:{

            return {
                productList:[...state.products,action.payload]
            }
        }
        case REMOVE_PROUCT:{

            return {
                productList:state.products.filter(product=>product.id !== action.payload.id)
            }
        }
        default:
            return state
    }
}
 export default productsReducer