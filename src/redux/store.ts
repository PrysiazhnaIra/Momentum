import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import filtersReducer from "./filtersSlice";

//reducer - функція із логікою зміни стану Redux
//Передаємо початкове значення стану Redux

//Стор це об'єкт, який містить глобальний стан додатка
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});

// Тип стану всього Redux-стору
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
