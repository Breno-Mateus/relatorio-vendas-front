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
    cell: (info) => <span className="whitespace-nowrap">{info.getValue()}</span>
  }),
  columnHelper.accessor("categoria", {
    header: "Categoria",
    cell: (info) => (
      <span className="whitespace-nowrap bg-slate-100 px-2 py-1 rounded-full border border-slate-200">
          {info.getValue()}
      </span>
      )
  }),
  columnHelper.accessor("quantidade", {
    header: "Qtd.",
    cell: (info) => <div>{info.getValue()}</div>
  }),
  columnHelper.accessor("data_venda", {
    header: "Data",
    cell: (info) => {
        const dataObj = new Date(info.getValue());
        return <span className="whitespace-nowrap">{dataObj.toLocaleDateString("pt-BR")}</span>;
    }
  }),
  columnHelper.accessor("valor_total", {
    header: "Total",
    cell: (info) => {
        const valor = info.getValue();
        return <span className="whitespace-nowrap">
            {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valor)}
        </span>;
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
    <div className="rounded-md border border-smooth bg-white shadow-sm overflow-hidden m-6">      
      <div className="overflow-x-auto">
        <table className="text-sm text-left w-full">                     
          <thead className="bg-primary uppercase font-semibold text-xs border-b border-smooth">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id} className="px-4 py-3 md:px-6 whitespace-nowrap">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
              ))}
          </thead>

          <tbody className="divide-y divide-smooth">
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="hover:bg-primary/50 transition-colors">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="px-4 py-4 md:px-6">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesTable;