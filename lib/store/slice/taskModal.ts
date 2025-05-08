import { createSlice } from "@reduxjs/toolkit";

type TaskModalFieldData={
  id: number;
  title: string;
  description: string | null;
} |null;
type TaskModalState = {
  isModalOpen: boolean;
  data: TaskModalFieldData
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
    setData: (state, action:{payload:TaskModalFieldData}) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
      if(!action.payload) {
        state.data = null;
      }
    },
  },
});

export const { setData, setModalOpen, setLoading } = modalSlice.actions;
export const taskModalReducer = modalSlice.reducer;
