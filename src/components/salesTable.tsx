import { 
    createColumnHelper, 
    flexRender, 
    getCoreRowModel, 
    useReactTable 
} from "@tanstack/react-table";
import type { Venda } from "../types/venda";

interface SalesTableProps {
    data: Venda[];
}

const columnHelper = createColumnHelper<Venda>();

const columns = [
    columnHelper.accessor("produto", {
        header: "Produto",
        cell: (info) => <span>{info.getValue()}</span>
    }),
    columnHelper.accessor("categoria", {
        header: "Categoria",
        cell: (info) => (
            <span className="bg-slate-100 px-2 py-1 rounded-full border border-slate-200">
                {info.getValue()}
            </span>
        )
    }),
    columnHelper.accessor("quantidade", {
        header: "Qtd.",
        cell: (info) => <span>{info.getValue()}</span>
    }),
    columnHelper.accessor("data_venda", {
        header: "Data",
        cell: (info) => new Date(info.getValue()).toLocaleDateString("pt-BR")
    }),
    columnHelper.accessor("valor_total", {
        header: "Total",
        cell: (info) => {
            const valor = info.getValue();
            return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valor);
        }
    }),
];

const SalesTable = ({data}: SalesTableProps) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="rounded-md border border-smooth overflow-hidden m-6 shadow-md">
            <table className="w-full text-sm text-left">
                <thead className="bg-primary text-secondary uppercase font-semibold text-xs border-b border-smooth">
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id} className="px-6 py-3">
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody className="bg-white divide-y divide-smooth">
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id} className="hover:bg-primary/50 transition-colors">
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} className="px-6 py-4">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SalesTable;