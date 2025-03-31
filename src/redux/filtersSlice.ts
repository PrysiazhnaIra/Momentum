import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FilterState = {
  status: "all" | "active" | "completed";
};

const initialState: FilterState = {
  status: "all",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setStatusFilter: (
      state,
      action: PayloadAction<"all" | "active" | "completed">
    ) => {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
