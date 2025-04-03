import axios from "axios";

const API_URL = "http://localhost:3000/clientes";

interface Cliente {
  id?: number;
  nome: string;
  email: string;
  senha: string;
}

export const getClientes = async (): Promise<Cliente[]> => {
  const response = await axios.get<Cliente[]>(API_URL);
  return response.data;
};

export const getClienteById = async (id: number): Promise<Cliente> => {
  const response = await axios.get<Cliente>(`${API_URL}/${id}`);
  return response.data;
};

export const createCliente = async (cliente: Cliente): Promise<Cliente> => {
  const response = await axios.post<Cliente>(API_URL, cliente);
  return response.data;
};

export const updateCliente = async (
  id: number,
  cliente: Cliente
): Promise<Cliente> => {
  const response = await axios.put<Cliente>(`${API_URL}/${id}`, cliente);
  return response.data;
};

export const deleteCliente = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
