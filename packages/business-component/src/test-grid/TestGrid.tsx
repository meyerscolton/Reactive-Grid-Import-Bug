import React from 'react';
import Paper from '@mui/material/Paper';
import {
  Grid,
  Table,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';

export const TestGrid = (props: any) => {
  console.log('The grid imports are: ', Grid, Table, TableHeaderRow, Paper)
  const columns = [
    { name: 'id' },
    { name: 'name' },

  ]

  const rows = [
    { id: 0, name: 'test'},
    { id: 1, name: 'test2'},
    { id: 2, name: 'test3' }
  ]

  return (
    <Paper>
      <Grid
        rows={rows}
        columns={columns}
      >
        <Table />
        <TableHeaderRow />
      </Grid>
    </Paper>
  );
};

