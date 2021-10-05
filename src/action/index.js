import { ADD_ORDER, DELETE_ORDER } from "./type";


export const addOrder = (item)=>{
    return ({
        type: ADD_ORDER,
        payload:item
    }
        
    )
} 

export const deleteOrder = (item) => {
    return ({
        type:DELETE_ORDER,
        payload:item
    })
}
    