import { DECREMENT, INCREMENT } from "./action";

const initialState = {
    order : 0
}

function ProductReducer(state = initialState, action) {
    

    

    switch (type) {
        case INCREMENT:
            return { ...state, order: state.order + 1 };        
        case DECREMENT:
            return { ...state, order: state.order - 1 };
        default:
            return {...state};
    }
}
export default ProductReducer;