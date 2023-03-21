import { configureStore } from '@reduxjs/toolkit';
import cryptoCoinsReducer from '../crypto/cryptoCoinSlice';

export default configureStore({
  reducer: {
    cryptoCoins: cryptoCoinsReducer,
  },
});
