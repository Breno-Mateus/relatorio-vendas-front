import { FiPrinter } from "react-icons/fi";

interface HeaderProps {
  onExport: () => void;
}

const Header = ({onExport}: HeaderProps) => {
  return ( 
    <header className="flex justify-between items-center p-4 border-b border-smooth bg-primary">
      <h1 className="text-xl md:text-2xl font-bold">Relatório de Vendas</h1>
      <button
        onClick={onExport} 
        className="bg-brand rounded-md py-1 px-2 text-primary font-medium flex items-center gap-2 hover:cursor-pointer hover:opacity-80 transition-opacity"
      >
        <FiPrinter/> 
        <span className="hidden md:block">
          Exportar PDF
        </span>
      </button>
    </header>
  );
};

export default Header;