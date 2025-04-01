import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Task = {
  id: string | number;
  text: string;
  completed: boolean;
  category: string;
};

type TasksState = {
  items: Task[];
};

const initialState: TasksState = {
  items: [
    { id: 0, text: "Learn HTML and CSS", completed: true, category: "Study" },
    {
      id: 1,
      text: "Get good at JavaScript",
      completed: true,
      category: "Study",
    },
    { id: 2, text: "Go to shop", completed: true, category: "Household" },
    { id: 3, text: "Complete project", completed: false, category: "Work" },
    {
      id: 4,
      text: "Purchase flowers",
      completed: false,
      category: "Household",
    },
  ],
};

//Reducer — це чиста функція, яка отримує поточний стан (state) і дію (action) та повертає новий стан (state). Редюсер не змінює існуючий стан, а створює новий, на основі старого та виконаної дії.

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    //об'єкт, що містить методи для кожної дії (action).
    addTask: (state, action: PayloadAction<Task>) => {
      state.items.push(action.payload); // додаємо нове завдання до масиву
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const { id, text } = action.payload;
      const task = state.items.find((task) => task.id === id);
      if (task) {
        task.text = text;
      }
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

// Експортуємо фабрики екшенів
export const { addTask, updateTask, deleteTask, toggleCompleted } =
  tasksSlice.actions;

// Експортуємо редюсер слайсу
export default tasksSlice.reducer;
