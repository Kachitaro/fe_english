import axios from "axios";

const authToken = localStorage.getItem("token");
const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: { Authorization: `Bearer ${authToken}`},
});
instance.defaults.headers.common["Content-Type"] = "application/json";

export const post = async (path: string, data?: {}, options = {}) => {
  const response  = await instance.post(path, data, options);
  return response.data; 
}

export const get = async (path: string, data?:{}) =>{
  const response = await instance.get(path, data);
  return response.data;
}

export const del = async (path: string, data?:{}) =>{
  const response = await instance.delete(path, data);
  return response;
}


export const update = async (path: string, data?:{}, options = {}) => {
  const response = await instance.patch(path, data, options);
  return response.data;
}

export default instance;