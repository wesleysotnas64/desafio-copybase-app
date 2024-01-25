import axios from "axios";
import { apiRoutes as apiRoutes} from "./apiRoutes";

export const apiPost = async (data) => {
    try {
      const response = await axios.post(apiRoutes.post, data, {
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
      const response = await axios.get(apiRoutes.getAll);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter dados:', error);
    }
};

export const apiGetRevenueFromYear = async (year) => {
  try {
    const response = await axios.get(`${apiRoutes.revenueFromYear}${year}`);
    return response.data;
  } catch (error){
    console.error('Erro ao obter dados:', error);
  }
};

export const apiGetRevenueFromYearAndMonth = async (date) => {
  const {year, month} = date;
  try {
    const response = await axios.get(`${apiRoutes.revenueFromYearAndMonth}${year}/${month}`);
    return response.data;
  } catch (error){
    console.error('Erro ao obter dados:', error);
  }
};

export const apiGetChurnRateFromYearAndMonth = async (date) => {
  const {year, month} = date;
  try {
    const response = await axios.get(`${apiRoutes.churnRateFromYearAndMonth}${year}/${month}`);
    return response.data;
  } catch (error){
    console.error('Erro ao obter dados:', error);
  }
};

export const apiGetChurnRateFromYear = async (year) => {

  try {
    const response = await axios.get(`${apiRoutes.churnRateFromYear}${year}`);
    return response.data;
  } catch (error){
    console.error('Erro ao obter dados:', error);
  }
};

export const apiGetChurnRateAllMonthsFromYear = async (year) => {

  try {
    const response = await axios.get(`${apiRoutes.churnRateAllMonthsFromYear}${year}`);
    return response.data;
  } catch (error){
    console.error('Erro ao obter dados:', error);
  }
};

export const apiDeleteAll = async () => {
  try {
    const response = await axios.delete(apiRoutes.deleteAll);
    return response;
  } catch (error) {
    console.error('Erro ao deletar todos os dados:', error);
  }
};