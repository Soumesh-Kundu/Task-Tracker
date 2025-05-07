import { createSlice } from "@reduxjs/toolkit";

type TaskModalState = {
  isModalOpen: boolean;
  data: any | null;
  loading: boolean;
};

const intitalState:TaskModalState = {
  isModalOpen: false,
  data: null,
  loading: false,
};
const modalSlice = createSlice({
  name: "taskModal",
  initialState: intitalState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const { setData, setModalOpen, setLoading } = modalSlice.actions;
export const taskModalReducer = modalSlice.reducer;
