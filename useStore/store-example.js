//* libraries
import { configureStore } from '@reduxjs/toolkit';
//* slices
import { exampleSlice } from './exampleSlice';

export const store = configureStore({
    reducer: {
        example: exampleSlice.reducer,
    }
});