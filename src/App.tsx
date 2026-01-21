import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useVendas } from "./hooks/useVendas";
import Header from "./components/header";
import Filters from "./components/filters";
import SalesTable from "./components/salesTable";
import { useCategorias } from "./hooks/useCategory";

const App = () => {
  const [filtros, setFiltros] = useState({
      produto: "",
      categoria: "",
      dataInicio: "",
      dataFim: ""
  });

  const { data: vendas, isLoading, isError } = useVendas(filtros);
  const { data: categorias = [] } = useCategorias();

  const handleSearch = (text: string) => setFiltros(prev => ({ ...prev, produto: text }));
  const handleCategory = (cat: string) => setFiltros(prev => ({ ...prev, categoria: cat }));
  const handleDates = (start: string, end: string) => {
      setFiltros(prev => ({ 
          ...prev, 
          dataInicio: start || prev.dataInicio, 
          dataFim: end || prev.dataFim 
      }));
  };

 
  const contentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
      contentRef: contentRef,
      documentTitle: "Relatorio_Vendas",
  });

  return (
    <div className="min-h-screen bg-background pb-10">
        <Header onExport={() => handlePrint && handlePrint()} />

        <main>
          <Filters 
            onSearchChange={handleSearch}
            onCategoryChange={handleCategory}
            onDateRangeChange={handleDates}
            categorias={categorias}
          />

          {isLoading && <p className="text-center text-muted animate-pulse">Carregando...</p>}
          {isError && <p className="text-center text-red-500">Erro ao buscar dados.</p>}

          {!isLoading && !isError && (
              <div ref={contentRef} className="print:shadow-none print:border-none">
                  <div className="hidden print:block mb-6 border-b border-black pb-4">
                      <h1 className="text-2xl font-bold">Relatório de Vendas</h1>
                      <p className="text-sm">Gerado em {new Date().toLocaleDateString()}</p>
                  </div>
                  <SalesTable data={vendas || []} />
              </div>
          )}
        </main>
    </div>
  );
}

export default App;
