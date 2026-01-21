import { IoIosSearch } from "react-icons/io";
import { IoFilter } from "react-icons/io5";

const Filters = () => {
    return (
        <div className="m-6 p-4 md:p-6 grid grid-cols-1 md:grid-cols-4 gap-4 bg-white rounded-md shadow-md">
            <div className="flex items-center justify-between border border-secondary rounded-md px-3 py-2 gap-2">
                <input 
                    type="text" 
                    placeholder="Buscar produto..."
                    className="bg-white text-secondary outline-none placeholder:text-secondary"
                />
                <IoIosSearch className="text-secondary" />
            </div>

            <div className="flex items-center justify-between border border-secondary rounded-md px-3 py-2 gap-2">
                <select 
                    className="bg-white text-secondary outline-none appearance-none cursor-pointer"
                >
                    <option value="">Todas as categorias</option>
                    <option value="Eletrônicos">Eletrônicos</option>
                    <option value="Móveis">Móveis</option>
                    <option value="Escritório">Escritório</option>
                </select>

                <IoFilter className="text-secondary" />
            </div>

            <input 
                type="date"
                className="bg-white text-secondary uppercase tracking-wide border border-secondary rounded-md px-3 py-2 gap-2"
            />

            <input 
                type="date"
                className="bg-white text-secondary uppercase tracking-wide border border-secondary rounded-md px-3 py-2 gap-2"
            />

        </div>
    );
};

export default Filters;