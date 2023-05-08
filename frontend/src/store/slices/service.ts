import { createSlice,
  createAsyncThunk } from '@reduxjs/toolkit';

  const serviceThunk = createAsyncThunk(
    'service',
    async () => {
      console.log('serviceThunk')
      // const response = await fetch(`/api/categories/${id}`);
      // const data = await response.json();
      // return data;
    },
  );

export const serviceSlice = createSlice({
  name: 'service',
  initialState: {
    name: '',
    phone: '',
    link: ''
  },
  reducers: {
    save: (state, { payload }) => ({ ...state, ...payload })
  }
});

export const { save } = serviceSlice.actions;

export {
  serviceThunk
};

export default serviceSlice.reducer;
