import { useQuery } from "@tanstack/react-query";
import { api } from "../services/axiosInstance";
import type { Venda, FiltrosVenda } from "../types/venda";

const fetchVendas = async (filtros: FiltrosVenda) => {
    const params = new URLSearchParams();

    if (filtros.produto) params.append("produto", filtros.produto);
    if (filtros.categoria) params.append("categoria", filtros.categoria);
    if (filtros.dataInicio) params.append("dataInicio", filtros.dataInicio);
    if (filtros.dataFim) params.append("dataFim", filtros.dataFim);

    const response = await api.get<Venda[]>(`/relatorio?${params.toString()}`);
    return response.data;
};


export const useVendas = (filtros: FiltrosVenda) => {
    return useQuery({
        queryKey: ['vendas', filtros], 
        queryFn: () => fetchVendas(filtros),
        placeholderData: (previousData) => previousData, 
    });
};