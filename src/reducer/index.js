import { ADD_ORDER, DELETE_ORDER } from "../action/type";

const initialState = {
    orderList : []
}

console.log(initialState);

export default function rootReducer ( state= initialState, action){
    const orderList = [...state.orderList];
    let position
    switch (action.type){
        case ADD_ORDER:
            return {
                orderList : [...state.orderList, action.payload]
            };
        case DELETE_ORDER:
            position = orderList.indexOf(action.payload)
                orderList.splice(position, 1)
            return {
              orderList  
            }
        default:
            return state;
    }
    console.log(state)
}


