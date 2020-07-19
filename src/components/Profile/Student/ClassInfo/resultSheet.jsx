import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#006160',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



export default function ResultSheet({rows}) {
  let grade = ''
  const getGrade = (total, length) => {
    let num = total/length;
    return(num>=80?'A+':num>=70?'A':num>=60?'A-':num>=50?'B':num>=45?'C':num>=40?'D':'F')
  }
  const totalNumber = (numList) => {
    let total = 0
    numList.map((val)=>(
      total += val.marks
    ))
    grade = getGrade(total, numList.length)
    return total;
  }

  return (
    <TableContainer>
      <Table aria-label="result table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Subject</StyledTableCell>
            <StyledTableCell align="right">Marks</StyledTableCell>
            <StyledTableCell align="right">Grade</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {row.subject}
              </StyledTableCell>
              <StyledTableCell align="right">{row.marks}</StyledTableCell>
              <StyledTableCell align="right">{row.grade}</StyledTableCell>
            </StyledTableRow>
          ))}

          <TableRow>
            <TableCell style={{border:0}} align="right">Total</TableCell>
            <TableCell style={{border:0}} align="right">{totalNumber(rows)}</TableCell>
            <TableCell style={{border:0}} align="right">{grade}</TableCell>
          </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
  );
}
