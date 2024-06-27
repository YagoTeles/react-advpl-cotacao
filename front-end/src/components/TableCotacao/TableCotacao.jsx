import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';

const TableCotacao = ({ data, onEdit }) => {
  const [editableData, setEditableData] = useState(data);

  const handleEdit = (index, field, value) => {
    if (value == ''){
      value = 0
    }

    const newValue = parseFloat(value);
    console.log(newValue)
    const newData = [...editableData];
    newData[index][field] = newValue;
    // Calcula o valor total
    newData[index].valorTotal = newData[index].quantidade * newData[index].valorUnitario * ( 1 - newData[index].desc/100);
    setEditableData(newData);
    onEdit(newData); // Chama a função onEdit com os dados atualizados
  };

  const textFieldStyle = ({
    '& input[type=number]': {
      '-moz-appearance': 'textfield',
    },
    '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
  });

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell>Código</TableCell>
            <TableCell>Produto</TableCell>
            <TableCell>UM</TableCell>
    
            <TableCell>Quantidade</TableCell>
            <TableCell>Vlr. Unitário</TableCell>
            <TableCell>Desconto</TableCell>
            <TableCell>Vlr. Total</TableCell>
            <TableCell>Dt. Entrega</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {editableData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.item}</TableCell>
              <TableCell>{row.codigo}</TableCell>
              <TableCell>{row.produto}</TableCell>
              <TableCell>{row.um}</TableCell>
              <TableCell>{row.quantidade}</TableCell>
              <TableCell>
                <TextField
                  type="number"
                  value={row.valorUnitario}
                  onChange={(e) => handleEdit(index, 'valorUnitario', e.target.value)}
                  variant="standard"
                  size="small"
                  sx={textFieldStyle}
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="number"
                  value={row.desc}
                  onChange={(e) => handleEdit(index, 'desc', e.target.value)}
                  variant="standard"
                  size="small"
                  sx={textFieldStyle}
                />
              </TableCell>

              <TableCell>
                {parseFloat(row.valorTotal).toFixed(2)}
              </TableCell>
              <TableCell>
                <TextField
                  type="number"
                  value={row.dataEntrega}
                  onChange={(e) => handleEdit(index, 'dataEntrega', e.target.value)}
                  variant="standard"
                  size="small"
                  className="no-spin"
                  sx={textFieldStyle}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableCotacao;