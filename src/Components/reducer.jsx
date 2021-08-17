

export const reducer = (state, action) => {
       

        if(action.type === "REMOVE_ITEM") {
                return {
                        ...state,
                        item: state.item.filter((curElem) => {
                                return curElem.id != action.payload;
                        }),
                };
        }

        if(action.type === "CLEAR_CART") {
                return {
                        ...state,
                        item: [],
                };
        }

        if(action.type === "INCREMENT") {
               let updatedCart = state.item.map((curElem) => {
                if (curElem.id === action.payload) {
                   return { ...curElem, quantity:curElem.quantity + 1};
                }
                return curElem;
               })
               return { ...state, item: updatedCart };
        }

        if(action.type === "DECREMENT") {
                let updatedCart = state.item.map((curElem) => {
                        if (curElem.id === action.payload) {
                           return { ...curElem, quantity:curElem.quantity - 1};
                        }
                        return curElem;
                       })
                       .filter((curElem) => curElem.quantity != 0); 
                       
                       // if quanity is 0 then its remove that items


                       return { ...state, item: updatedCart };

        }

        if(action.type === "GET_TOTAL") {
            let { totalItem, totalAmount } = state.item.reduce (
                    (accum, curVal) => {
                    let { quantity, price } = curVal;

                    let updatedtotalAmount = price * quantity;
                    accum.totalAmount += updatedtotalAmount
                    accum.totalItem += quantity;
                    return accum;
            }, 
            {
                totalItem: 0,
                totalAmount: 0,
            }
            );
            return { ...state, totalItem, totalAmount  };
        }
 return state;
};
