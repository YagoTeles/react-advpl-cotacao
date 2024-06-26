// AuthContext.js
import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import API_BASE_URL from './apiurlbase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [hash, setHash] = useState(null);
  const [userData, setUserData] = useState(null); // Novo estado para armazenar os dados do usuário

  const login = async (hashcode) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/compras/dados-cotacao?hashcotacao=${hashcode}`);

      if (response.status === 200) { // Verifica se o retorno foi 200
        setHash(hashcode);
        setUserData(response.data); // Supondo que 'userData' seja o array de JSON no retorno
        return { success: true };
      } else {
        console.error("Erro ao fazer login: status não é 200");
        return { success: false };
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      return { success: false };
    }
  };

  const logout = () => {
    setHash(null);
    setUserData(null); // Limpa os dados do usuário no logout
  };

  return (
    <AuthContext.Provider value={{ hash, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
