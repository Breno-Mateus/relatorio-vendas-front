import { 
    createColumnHelper, 
    flexRender, 
    getCoreRowModel, 
    useReactTable 
} from "@tanstack/react-table";

export interface Venda {
    id: number;
    produto: string;
    categoria: string;
    quantidade: number;
    valorTotal: number;
    data: string;
}

const data: Venda[] = [
    { id: 1, produto: "Notebook Gamer", categoria: "Eletrônicos", quantidade: 1, valorTotal: 4500.00, data: "2023-10-25" },
    { id: 2, produto: "Cadeira de Escritório", categoria: "Móveis", quantidade: 2, valorTotal: 800.00, data: "2023-10-26" },
    { id: 3, produto: "Monitor 24pol", categoria: "Eletrônicos", quantidade: 3, valorTotal: 2100.00, data: "2023-10-27" },
    { id: 4, produto: "Teclado Mecânico", categoria: "Periféricos", quantidade: 5, valorTotal: 750.00, data: "2023-10-28" },
    { id: 5, produto: "Mesa em L", categoria: "Móveis", quantidade: 1, valorTotal: 1200.00, data: "2023-10-29" },
];

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
    columnHelper.accessor("data", {
        header: "Data",
        cell: (info) => new Date(info.getValue()).toLocaleDateString("pt-BR")
    }),
    columnHelper.accessor("valorTotal", {
        header: "Total",
        cell: (info) => {
            const valor = info.getValue();
            return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valor);
        }
    }),
];

const SalesTable = () => {
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