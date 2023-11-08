import { configureStore } from '@reduxjs/toolkit';
import rootReducers from "./reducer";

const store = configureStore({
    reducer: {
        counter: rootReducers,
    },
});

export default store;
