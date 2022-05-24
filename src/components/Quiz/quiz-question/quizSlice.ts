
import { createSlice  } from '@reduxjs/toolkit';
import data from "../../../questions.json";
console.log("data",data)
interface QuizState {
    value: any, 
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

