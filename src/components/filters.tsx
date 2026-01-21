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
        <div className="m-6 p-4 md:p-6 grid grid-cols-1 md:grid-cols-4 gap-4 bg-white rounded-md shadow-md text-sm">
            <div className="flex items-center justify-between border border-secondary rounded-md px-3 py-2 gap-2">
                <input 
                    type="text" 
                    placeholder="Buscar produto..."
                    onChange={e => onSearchChange(e.target.value)}
                    className="bg-white text-secondary outline-none placeholder:text-secondary"
                />
                <IoIosSearch className="text-secondary" />
            </div>

            <div className="flex items-center justify-between border border-secondary rounded-md px-3 py-2 gap-2">
                <select 
                    className="bg-white text-secondary outline-none appearance-none cursor-pointer"
                    onChange={e => onCategoryChange(e.target.value)}
                >
                    <option value="">Todas as categorias</option>
                    {categorias.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>

                <IoFilter className="text-secondary" />
            </div>

            <input 
                type="date"
                className="bg-white text-secondary uppercase tracking-wide border border-secondary rounded-md px-3 py-2 gap-2"
                onChange={(e) => onDateRangeChange(e.target.value, "")}
            />

            <input 
                type="date"
                className="bg-white text-secondary uppercase tracking-wide border border-secondary rounded-md px-3 py-2 gap-2"
                onChange={(e) => onDateRangeChange("", e.target.value)}
            />

        </div>
    );
};

export default Filters;