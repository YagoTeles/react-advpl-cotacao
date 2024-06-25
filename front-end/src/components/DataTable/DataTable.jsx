import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'filial', label: 'Filial', minWidth: 170 },
  { id: 'numero', label: 'Numero', minWidth: 170 },
  { id: 'cliente', label: 'Cliente', minWidth: 100 },
  { id: 'data', label: 'Emissao', minWidth: 100 },
  {
    id: 'quantidade',
    label: 'Quantidade',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('pt-BR'),
  },
  {
    id: 'valor',
    label: 'Valor',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('pt-BR'),
  },
];

const rows = [
    {filial:"010101",numero:"000001",cliente:"Cliente Teste",quantidade:0,valor:0},
    {filial:"010101",numero:"000002",cliente:"Cliente Teste"},
    {filial:"010101",numero:"000002",cliente:"Cliente Teste"}
];

export default function ColumnGroupingTable() {
  //const [page, setPage] = React.useState(0);
  //const [rowsPerPage, setRowsPerPage] = React.useState(-1);
  const page = 0
  const rowsPerPage = 999999999999999

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ height: '80vh' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    
    </Paper>
  );
}
