import { configureStore, createSlice } from "@reduxjs/toolkit";

import counterReducer from './counter.js'
import authReducer from './auth.js'

// const store = createStore(counterReducer);
// const store = configureStore({
//     reducer: counterSlice.reducer,
// });

const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
                    