export interface Venda {
  id: number;
  produto: string;
  categoria: string;
  quantidade: number;
  valor_total: number;
  data_venda: string;
}

export interface FiltrosVenda {
  produto?: string;
  categoria?: string;
  dataInicio?: string;
  dataFim?: string;
}