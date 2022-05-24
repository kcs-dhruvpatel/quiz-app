import { configureStore } from '@reduxjs/toolkit'
import quizReducer from '../components/Quiz/quiz-question/quizSlice'
// import { apiSlice } from '../components/Quiz/quiz-question/dogs-apiSlice';

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    // [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware().concat(apiSlice.middleware);
  // },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
