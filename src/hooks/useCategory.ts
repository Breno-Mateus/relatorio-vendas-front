import { useQuery } from "@tanstack/react-query";
import { api } from "../services/axiosInstance";
import type { Venda } from "../types/venda";

const fetchCategorias = async () => {
  const response = await api.get<Venda[]>('/relatorio');
  const todasVendas = response.data;
  const categoriasUnicas = Array.from(new Set(todasVendas.map(v => v.categoria)));
  return categoriasUnicas.sort();
};

export const useCategorias = () => {
  return useQuery({
    queryKey: ['categorias'], 
    queryFn: fetchCategorias,
    staleTime: 1000 * 60 * 30,
  });
};