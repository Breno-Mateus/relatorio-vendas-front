import { IoIosSearch } from "react-icons/io";
import { IoFilter } from "react-icons/io5";

interface FiltersProps {
  onSearchChange: (text: string) => void;
  onCategoryChange: (category: string) => void;
  onDateRangeChange: (start: string, end: string) => void;
  categorias: string[];
}

const Filters = ({onSearchChange, onCategoryChange, onDateRangeChange, categorias}: FiltersProps) => {
  return (
    <div className="m-6 p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 bg-white rounded-md shadow-md text-sm">
      <div className="flex items-center justify-between border border-smooth rounded-md px-3 py-2 gap-2 text-gray-500">
        <input 
          type="text" 
          placeholder="Buscar produto..."
          onChange={e => onSearchChange(e.target.value)}
          className="bg-white outline-none placeholder:text-gray-500"
        />
        <IoIosSearch/>
      </div>

      <div className="flex items-center justify-between border border-smooth rounded-md px-3 py-2 gap-2 text-gray-500">
        <select 
          className="bg-white outline-none appearance-none cursor-pointer"
          onChange={e => onCategoryChange(e.target.value)}
        >
          <option value="">Todas as categorias</option>
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
                {cat}
            </option>
          ))}
        </select>
        <IoFilter/>
      </div>
      
      <div className="flex flex-col gap-1 border border-smooth rounded-md p-2 text-gray-500">
        <p className="text-center text-xs">Data inicial / Data final</p>
        <div className="flex justify-between gap-1 text-xs md:text-sm">
          <input 
            type="date"
            className="bg-white uppercase tracking-wide border border-smooth rounded-md px-3 py-1 gap-2 w-1/2"
            onChange={(e) => onDateRangeChange(e.target.value, "")}
          />

          <input 
            type="date"
            className="bg-white uppercase tracking-wide border border-smooth rounded-md px-3 py-1 gap-2 w-1/2"
            onChange={(e) => onDateRangeChange("", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;