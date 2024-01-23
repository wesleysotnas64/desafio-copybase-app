import axios from "axios";

export const apiPost = async (data) => {
    try {
      const response = await axios.post('https://desafio-copybase.onrender.com/desafio-copybase', data, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: null,
      });
  
      console.log('IN API_POST -> Dados enviados com sucesso:', response.data);
    } catch (error) {
      console.error('IN API_POST -> Erro ao enviar dados:', error);
      throw error;
    }
};

export const apiGetAll = async () => {
    try {
      // Fazer a chamada GET usando Axios para obter os dados
      const response = await axios.get('https://desafio-copybase.onrender.com/desafio-copybase');

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter dados:', error);
    }
};