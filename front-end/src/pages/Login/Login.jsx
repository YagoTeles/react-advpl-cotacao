// Login.js
import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Box, Button, TextField, Typography, Container, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {
  const [hashcode, setHashcode] = useState('');
  const { login } = useAuth();
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const result = await login(hashcode);
    if (result.success) {
      navigate('/gera-cotacao'); 
      
    } else {
        setLoading(false);
        handleClickOpen()
    }
  };
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
    <Card sx={{padding:4}}>    
        <Typography component="h1" variant="h6">
          Insira o hash que se encontra no E-mail recebido.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="hashcode"
            label="Hashcode"
            name="hashcode"
            autoComplete="off"
            autoFocus
            value={hashcode}
            onChange={(e) => setHashcode(e.target.value)}
            variant="standard"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
          >
            Entrar
          </Button>
        </Box>
    </Card>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog"
      >
        <DialogTitle id="responsive-dialog-title">
          Chave Não Encontrada
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
             Não foi possivel encontrar a chave informada. Verfique se está correta.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
      </Box>
    
  );
};

export default Login;
