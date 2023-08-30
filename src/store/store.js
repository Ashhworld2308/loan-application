import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from '../components/applicationTracker/appTrackerSlice';

const store = configureStore({
    reducer: {
        application: applicationReducer
    }
});

export default store;