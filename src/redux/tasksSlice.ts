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
  items: [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: true },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ],
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
    toggleCompleted: (state, action: PayloadAction<string | number>) => {
      const task = state.items.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed; // Перемикаємо стан
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions; // Імпортуємо action creators
export default tasksSlice.reducer; // Експортуємо редюсер
