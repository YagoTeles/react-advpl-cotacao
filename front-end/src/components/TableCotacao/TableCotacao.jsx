import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const TableCotacao = ({data}) => {

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell>Código</TableCell>
            <TableCell>Produto</TableCell>
            <TableCell>Quantidade</TableCell>
            <TableCell>UM</TableCell>
            <TableCell>Vlr. Unit</TableCell>
            <TableCell>Desc</TableCell>
            <TableCell>Vlr. Total</TableCell>
            <TableCell>Dt. Entrega</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.item}</TableCell>
              <TableCell>{row.codigo}</TableCell>
              <TableCell>{row.produto}</TableCell>
              <TableCell>{row.quantidade}</TableCell>
              <TableCell>{row.um}</TableCell>
              <TableCell>{row.valorUnitario}</TableCell>
              <TableCell>{row.desc}</TableCell>
              <TableCell>{row.valorTotal}</TableCell>
              <TableCell>{row.dataEntrega}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableCotacao;
