import axios from 'axios';
import queryString from 'query-string';
import { DealershipInterface, DealershipGetQueryInterface } from 'interfaces/dealership';
import { GetQueryInterface } from '../../interfaces';

export const getDealerships = async (query?: DealershipGetQueryInterface) => {
  const response = await axios.get(`/api/dealerships${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createDealership = async (dealership: DealershipInterface) => {
  const response = await axios.post('/api/dealerships', dealership);
  return response.data;
};

export const updateDealershipById = async (id: string, dealership: DealershipInterface) => {
  const response = await axios.put(`/api/dealerships/${id}`, dealership);
  return response.data;
};

export const getDealershipById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/dealerships/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDealershipById = async (id: string) => {
  const response = await axios.delete(`/api/dealerships/${id}`);
  return response.data;
};
