import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface Iprops {
  data: any;
  
}



const Quizend : React.FC<Iprops> = ({data})  => {
  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        
        <TableHead>
          <TableRow>
            <TableCell>Questions</TableCell>
            <TableCell align="right">A</TableCell>
            <TableCell align="right">B</TableCell>
            <TableCell align="right">C</TableCell>
            <TableCell align="right">D</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: {questionText:string , answerOptions:any, id:number}) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.questionText }
              </TableCell>

              {row.answerOptions.map((e: any, index: number) =>{
              return(<TableCell align="right" style={{backgroundColor: e.isCorrect ? "green" : 'none'}} key={index}>{e.answerText}</TableCell>)  
              })}
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Quizend


























// import React from 'react'


// interface Iprops {
//   data: any;
  
// }
// // type QuizendProps = {
// //   data:any
// // }

// const Quizend : React.FC<Iprops> = ({ data})  => {
//   console.log(data, "data")
//   return (
//     <div>Quizend</div>
//   )
// }

// export default Quizend