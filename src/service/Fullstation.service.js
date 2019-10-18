import axios from "axios";
const url = "url_fack.com";

export const regsiterFullStation = async entity => {
  try {
    const response = await axios.post(`${url}/fullStation`, entity);
    const { data } = response;
    return data;
  } catch (error) {
    return error;
  }
};

export const updateStation = async (id, entity) => {
  try {
    const response = await axios.put(`${url}/fullStation/${id}`);
    const { data } = response;
    return data;
  } catch (error) {
    return error;
  }
};

export const deleteFeulStation = async id => {
  try {
    const response = await axios.delete(`${url}/fullStation/${id}`);
    const { data } = response;
    return data;
  } catch (error) {
    return error;
  }
};

export const zipCode = async cep => {
  const urlCep = `http://viacep.com.br/ws/${cep}/json`;
  try {
    const response = await axios.get(urlCep);
    const { data } = response;
    return data;
  } catch (error) {
    return error;
  }
};
export const getAllFuelStation = async () => {
  try {
    const response = await axios.get(`${url}/fuelstation`);
    const { data } = response;
    return data;
  } catch (error) {
    return error;
  }
};
