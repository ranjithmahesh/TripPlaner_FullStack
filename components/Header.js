// import { createSlice } from "@reduxjs/toolkit";

// export const taskSlice = createSlice({
//   name: "tasks",
//   initialState: {
//     tasks: [],
//   },
//   reducers: {
//     addTaskToTrip: (state, action) => {
//       state.tasks.push(action.payload);
//     },
//     markTaskCompleted: (state, action) => {
//       const taskId = action.payload;
//       const task = state.tasks.find((task) => task.id === taskId);
//       if (task) {
//         task.completed = true;
//       }
//     },
//     deleteTask: (state, action) => {
//       const taskId = action.payload;
//       state.tasks = state.tasks.filter((task) => task.id !== taskId);
//     },
//   },
// });

// export const { addTask, markTaskCompleted, deleteTask } = taskSlice.actions;

// export default taskSlice.reducer;



















//2









// import { createSlice } from "@reduxjs/toolkit";

// export const taskSlice = createSlice({
//   name: "tasks",
//   initialState: {
//     tasks: [],
//   },
//   reducers: {
    // addTaskToTrip: (state, action) => {
    //   const { tripId, task } = action.payload;
    //   const trip = state.tasks.find((t) => t.id === tripId);
    //   if (trip) {
    //     trip.tasks.push({ ...task });
    //   }
    // },
//     markTaskAsCompleted: (state, action) => {
//       const { tripId, taskId } = action.payload;
//       const trip = state.tasks.find((t) => t.id === tripId);
//       if (trip) {
//         const task = trip.tasks.find((t) => t.id === taskId);
//         if (task) {
//           task.completed = true;
//         }
//       }
//     },
//     deleteTaskFromTrip: (state, action) => {
//       const { tripId, taskId } = action.payload;
//       const trip = state.tasks.find((t) => t.id === tripId);
//       if (trip) {
//         trip.tasks = trip.tasks.filter((t) => t.id !== taskId);
//       }
//     },
//   },
// });

// export const { addTaskToTrip, markTaskAsCompleted, deleteTaskFromTrip } = taskSlice.actions;

// export default taskSlice.reducer;




// 3



// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   tasks: [],
// };

// const taskSlice = createSlice({
//   name: "tasks",
//   initialState,
//   reducers: {
//     addTask: (state, action) => {
//       state.tasks.push(action.payload);
//     },
//     markTaskCompleted: (state, action) => {
//       const taskId = action.payload;
//       const task = state.tasks.find((task) => task.id === taskId);
//       if (task) {
//         task.completed = true;
//       }
//     },
//     deleteTask: (state, action) => {
//       const taskId = action.payload;
//       state.tasks = state.tasks.filter((task) => task.id !== taskId);
//     },
//   },
// });

// export const { addTask, markTaskCompleted, deleteTask } = taskSlice.actions;

// export default taskSlice.reducer;