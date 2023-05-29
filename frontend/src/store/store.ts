import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './slices/service';

export default configureStore({
  reducer: {
    service: serviceReducer
  }
});
