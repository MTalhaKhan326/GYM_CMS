import { createSlice } from "@reduxjs/toolkit";

let nextId = 1;

const initialState = {
  formData: [],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addFormData: (state, action) => {
      const { name, email, city, gender, gymname, phone } = action.payload;
      state.formData.push({
        id: nextId++,
        name,
        email,
        city,
        gender,
        gymname,
        phone,
      });
    },
  },
});

export const { addFormData } = formSlice.actions;
export default formSlice.reducer;
