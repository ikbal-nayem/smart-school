import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(section, f_st, s_nd, t_rd, f_th, fi_th, s_th) {
  return { section, f_st, s_nd, t_rd, f_th, fi_th, s_th };
}

const rows = [
  createData('A', 'bn-1', 'en-1', 'phy', 'che', 'math', 'ict'),
  createData('B', '-', 'bn-2', 'en-2', 'bio', 'math', 'phy'),
  createData('C', 'bn-1', 'en-1', 'phy', 'che', 'math', '-'),
  createData('D', 'bn-2', 'en-2', 'phy', 'che', 'math', 'ict'),
];


export default function TableItem() {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell style={styles.head}>Section</TableCell>
            <TableCell style={styles.head} align="right">8:30AM</TableCell>
            <TableCell style={styles.head} align="right">9:20AM</TableCell>
            <TableCell style={styles.head} align="right">10:10AM</TableCell>
            <TableCell style={styles.head} align="right">11:00AM</TableCell>
            <TableCell style={styles.head} align="right">11:50AM</TableCell>
            <TableCell style={styles.head} align="right">12:40PM</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.section}>
              <TableCell component="th" scope="row" className="text-primary">
                <b>{row.section}</b>
              </TableCell>
              <TableCell align="right">{row.f_st}</TableCell>
              <TableCell align="right">{row.s_nd}</TableCell>
              <TableCell align="right">{row.t_rd}</TableCell>
              <TableCell align="right">{row.f_th}</TableCell>
              <TableCell align="right">{row.fi_th}</TableCell>
              <TableCell align="right">{row.s_th}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


const styles = {
  head: {
    backgroundColor: "#616161",
    color: "white"
  }
}