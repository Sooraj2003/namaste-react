import { createSlice, current } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"Cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem : (state,action)=>{
            //previously with vanilla redux we would not mutate the state ,but used to create a new state and return it
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState

            //redux toolkit rtk
            // we can only mutate the state or return the new state,which will be replaced by existing state
            state.items.push(action.payload);
        },
        removeItem: (state,action) =>{
             state.items.pop();
        },
        //originalstate {items:[]}
        clearCart:(state,action) => {
          
           
            
           // state.items=[];
           return {items:[]}
        }
    }
});
export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;

// createSlice -> {

//       actions :{
//         addItem,
//         removeItem,
//         clearCart
//       },
//       reducer:{
//         addItem : ()=>
//         removeItem : ()=>
//         clearCart : ()=>    
//       }
//      }

//   action->{type:jdd,
  // payload:"pizza"}