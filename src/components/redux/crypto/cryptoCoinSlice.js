/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const coinsUrl = 'https://api.coinstats.app/public/v1/coins';

export const getCryptoCoinsAsync = createAsyncThunk(
  'cryptoCoins/getCryptoCoins',
  async () => {
    const resp = await axios.get(coinsUrl);
    console.log(resp.data.coins);
    return resp.data.coins;
  },
);

const cryptoCoinsSlice = createSlice({
  name: 'cryptoCoins',
  initialState: {
    cryptoCoins: [],
    error: null,
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCryptoCoinsAsync.pending, (state) => {
        const tempState = state;
        tempState.status = 'loading';
      })
      .addCase(getCryptoCoinsAsync.fulfilled, (state, actions) => {
        const tempState = state;
        tempState.cryptoCoins = actions.payload;
      })
      .addCase(getCryptoCoinsAsync.rejected, (state, actions) => {
        const tempState = state;
        tempState.error = actions.error.message;
      });
  },
});

export const cryptoCoinsActions = createAsyncThunk.actions;
export default cryptoCoinsSlice.reducer;
