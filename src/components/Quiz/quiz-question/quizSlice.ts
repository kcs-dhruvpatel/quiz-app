
import { createSlice  } from '@reduxjs/toolkit';
import data from "../../../questions.json";

interface QuizState {
    value: Array<object>, 
    //  questions:any
}

const initialState:QuizState  = {
    value: data,
    // questions :[]
  }

  export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {},
  })

// export const { increment, decrement ,amountAdded} = counterSlice.actions;

export default quizSlice.reducer;

