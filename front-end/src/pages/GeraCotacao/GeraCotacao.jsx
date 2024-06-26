import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card, Collapse, Typography, TextField } from '@mui/material';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import TableCotacao from "../../components/TableCotacao/TableCotacao";
import MenuItem from '@mui/material/MenuItem';
import './geracotacao.css';
const data = [
  {
    item: 1,
    codigo: '001',
    produto: 'Produto A',
    quantidade: 10,
    um: 'UN',
    valorUnitario: 20.0,
    desc: 'Desconto A',
    valorTotal: 200.0,
    dataEntrega: '2023-06-26',
  },
  {
    item: 2,
    codigo: '002',
    produto: 'Produto B',
    quantidade: 5,
    um: 'UN',
    valorUnitario: 15.0,
    desc: 'Desconto B',
    valorTotal: 75.0,
    dataEntrega: '2023-06-27',
  },
];
const condpag = [
  {
    value: '001',
    label: 'A Vista',
  },
  {
    value: '002',
    label: 'Boleto',
  },
];
const tpfrete = [
  {
    value: 'CIF',
    label: 'CIF - Cost, Insurance and Freight',
  },
  {
    value: 'FOB',
    label: 'FOB - Free On Board',
  },
];

function GeraCotacao() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [collapsed, setCollapsed] = useState({
    fornecedor: false,
    cotacao: false,
    obs:true
  });
  const [total, setTotal] = useState(0)

  const toggleCollapse = (section) => {
    setCollapsed((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://', formData);
      console.log('Resposta da API:', response.data);
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    }
  };
  const formatPrice = (number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(number);
  };

  return (
    <div className="main-gera-cotacao">
      <div className="dados-cotacao">
        <Button
          sx={{ width: '100%' }}
          onClick={() => toggleCollapse('fornecedor')}
          variant="contained"
          color="primary"
          endIcon={collapsed.fornecedor ? <KeyboardArrowDownOutlinedIcon /> : <KeyboardArrowUpOutlinedIcon />}
        >
          Dados Fornecedor
        </Button>
        <Collapse in={!collapsed.fornecedor}>
          <Card sx={{ padding: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6">Nome: </Typography>
            <Typography variant="h6">Telefone: </Typography>
            <Typography variant="h6">Endereço: </Typography>
            <Typography variant="h6">Cidade: </Typography>
            <Typography variant="h6">Estado: </Typography>
          </Card>
        </Collapse>
        <Button
          sx={{ width: '100%' }}
          onClick={() => toggleCollapse('cotacao')}
          variant="contained"
          color="primary"
          endIcon={collapsed.cotacao ? <KeyboardArrowDownOutlinedIcon /> : <KeyboardArrowUpOutlinedIcon />}
        >
          Dados Cotação
        </Button>
        <Collapse in={!collapsed.cotacao}>
          <Card sx={{ padding: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6">Numero: </Typography>
            <Typography variant="h6">Vencimento: </Typography>
            <br />
            <TableCotacao data={data} />
          </Card>
        </Collapse>
        <Button
          sx={{ width: '100%' }}
          onClick={() => toggleCollapse('obs')}
          variant="contained"
          color="primary"
          endIcon={collapsed.cotacao ? <KeyboardArrowDownOutlinedIcon /> : <KeyboardArrowUpOutlinedIcon />}
        >
          Observaçoes
        </Button>
        <Collapse in={!collapsed.obs}>
          <Card sx={{ padding: 1, display: 'flex', flexDirection: 'column' }}>
            <TextField id="observacoes" label="Observaçoes" variant="filled" multiline rows={5}/>
          </Card>
        </Collapse>
        

        <form onSubmit={handleSubmit}>
          {}
        </form>
      </div>

      <div className="totais-cotacao">
      <Button
          sx={{ width: '100%' }}
          variant="contained"
          color="primary"
        >
          Resumo
        </Button>
        <Card sx={{ padding: 1, display: 'flex', flexDirection: 'column' ,height:'100%', gap:1}}>
          <div className='resumo-cotacao-inputs'>
           
            <TextField
                id="tipofrete"
                select
                label="Tipo de frete"
                defaultValue="001"
                variant="standard"
                size="small"
                sx={{width:198.18}}
              >
                {tpfrete.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
            </TextField>

            <TextField id="frete" label="Frete" variant="standard" size="small" />
            <TextField
                id="condpag"
                select
                label="Condiçao de Pagamento"
                defaultValue="001"
                variant="standard"
                size="small"
                sx={{width:198.18}}
              >
                {condpag.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
            </TextField>
            <TextField id="desconto-geral" label="Desconto Geral" variant="standard" size="small"/>
     
          </div>
            <div className='resumo-cotacao'>
              <Typography variant="h6">Total: {formatPrice(total)}</Typography>
            </div>
        </Card>
      </div>
    </div>
  );
}

export default GeraCotacao;
