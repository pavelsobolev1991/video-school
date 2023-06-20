import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const serviceThunk = createAsyncThunk('service', async (data) => {
  const response = await fetch(`/api/service`, {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify({
      data,
    })
  })
  const responseData = await response.text(); // Или response.json() если ожидается JSON
  console.log('responseData', responseData);
});

export const serviceSlice = createSlice({
  name: 'service',
  initialState: {
    name: '',
    phone: '',
    link: '',
  },
  reducers: {
    save: (state, { payload }) => ({ ...state, ...payload }),
  },
});

export const { save } = serviceSlice.actions;

export { serviceThunk };

export default serviceSlice.reducer;
