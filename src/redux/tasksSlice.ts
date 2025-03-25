import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Task = {
  id: string | number;
  text: string;
  completed: boolean;
};

type TasksState = {
  items: Task[];
};

const initialState: TasksState = {
  items: [],
};

//Reducer — це чиста функція, яка отримує поточний стан (state) і дію (action) та повертає новий стан (state). Редюсер не змінює існуючий стан, а створює новий, на основі старого та виконаної дії.

const tasksSlice = createSlice({
  name: "tasks", // Назва цієї частини стейту
  initialState, // Початковий стан цього редюсера.
  reducers: {
    //об'єкт, що містить методи для кожної дії (action).
    addTask: (state, action: PayloadAction<Task>) => {
      state.items.push(action.payload); // додаємо нове завдання до масиву
    },
    deleteTask: (state, action: PayloadAction<string | number>) => {
      state.items = state.items.filter((task) => task.id !== action.payload); // фільтруємо завдання за id
    },
  },
});

export const { addTask, deleteTask } = tasksSlice.actions; // Імпортуємо action creators
export default tasksSlice.reducer; // Експортуємо редюсер
