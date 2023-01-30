import React, { HTMLAttributes, HTMLProps } from "react";

import "./MainTable.css";

import {
  Column,
  Table,
  ExpandedState,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getExpandedRowModel,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import { makeData, Person } from "./makeData";

export default function MainTable() {
  const rerender = React.useReducer(() => ({}), {})[1];

  const columns = React.useMemo<ColumnDef<Person>[]>(
    () => [
      {
        header: " ",
        footer: (props) => props.column.id,
        columns: [
          {
            accessorKey: "firstName",
            header: ({ table }) => <>Vendedor</>,
            cell: ({ row, getValue }) => (
              <div
                style={{
                  // Since rows are flattened by default,
                  // we can use the row.depth property
                  // and paddingLeft to visually indicate the depth
                  // of the row
                  paddingLeft: `${row.depth * 2}rem`,
                  
                }}
              >
                  
                <>
                  {" "}
                  {row.getCanExpand() ? (
                    <button
                      {...{
                        onClick: row.getToggleExpandedHandler(),
                        style: { cursor: "pointer" },
                      }}
                    >
                      {row.getIsExpanded() ? "👇" : "👉"}
                    </button>
                  ) : (
                    "🔵"
                  )}{" "}
                  {getValue()}
                </>
              </div>
            ),
            footer: (props) => props.column.id,
          },
          {
            accessorFn: (row) => row.lastName,
            id: "lastName",
            cell: (info) => info.getValue(),
            header: () => <span>Fecha Alta</span>,
            footer: (props) => props.column.id,
          },
          {
            accessorFn: (row) => row.lastName,
            id: "lastName",
            cell: (info) => info.getValue(),
            header: () => <span>Fecha Baja</span>,
            footer: (props) => props.column.id,
          },
          {
            accessorFn: (row) => row.lastName,
            id: "lastName",
            cell: (info) => info.getValue(),
            header: () => <span>Ingresadas</span>,
            footer: (props) => props.column.id,
          },
          {
            accessorFn: (row) => row.lastName,
            id: "lastName",
            cell: (info) => info.getValue(),
            header: () => <span>Ventas MP</span>,
            footer: (props) => props.column.id,
          },
          {
            accessorFn: (row) => row.lastName,
            id: "lastName",
            cell: (info) => info.getValue(),
            header: () => <span>Cruce Scoring</span>,
            footer: (props) => props.column.id,
          },
          {
            accessorFn: (row) => row.lastName,
            id: "lastName",
            cell: (info) => info.getValue(),
            header: () => <span>Objetivo</span>,
            footer: (props) => props.column.id,
          },
          {
            accessorFn: (row) => row.lastName,
            id: "lastName",
            cell: (info) => info.getValue(),
            header: () => <span>Producción</span>,
            footer: (props) => props.column.id,
          },
        ],
      },
      {
        header: "CLASIFICACIONES PENDIENTES",
        footer: (props) => props.column.id,
        columns: [
          
          
              {
                accessorKey: "visits",
                header: () => <span>2</span>,
                footer: (props) => props.column.id,
              },
              {
                accessorKey: "status",
                header: "4",
                footer: (props) => props.column.id,
              },
              {
                accessorKey: "progress",
                header: "5",
                footer: (props) => props.column.id,
              },
              {
                accessorKey: "progress",
                header: "6",
                footer: (props) => props.column.id,
              },
              {
                accessorKey: "progress",
                header: "7",
                footer: (props) => props.column.id,
              },
              {
                accessorKey: "progress",
                header: "SUBTOTAL",
                footer: (props) => props.column.id,
              },
              {
                accessorKey: "progress",
                header: "3",
                footer: (props) => props.column.id,
              },
              {
                accessorKey: "progress",
                header: "8",
                footer: (props) => props.column.id,
              },
              {
                accessorKey: "progress",
                header: "9",
                footer: (props) => props.column.id,
              },
              {
                accessorKey: "progress",
                header: "SUBTOTAL",
                footer: (props) => props.column.id,
              },
              {
                accessorKey: "progress",
                header: "Anulada 3 + 7",
                footer: (props) => props.column.id,
              },
              {
                accessorKey: "progress",
                header: "Anulada Rechazada",
                footer: (props) => props.column.id,
              },
            ],
         
      },
      //////////////////////////
      {
        header: "MESES ANTERIORES",
        footer: (props) => props.column.id,
        columns: [
          
          
              {
                accessorKey: "visits",
                header: () => <span>-1</span>,
                footer: (props) => props.column.id,
              },
              {
                accessorKey: "status",
                header: "-2",
                footer: (props) => props.column.id,
              },
              {
                accessorKey: "progress",
                header: "-3",
                footer: (props) => props.column.id,
              },
              {
                accessorKey: "progress",
                header: "PROM",
                footer: (props) => props.column.id,
              },
              {
                accessorKey: "progress",
                header: "GB",
                footer: (props) => props.column.id,
              },
            ],
         
      },

      
      //////////////////////////
    ],
    []
  );

  const [data, setData] = React.useState(() => makeData(100, 5, 3));
  const refreshData = () => setData(() => makeData(100, 5, 3));

  const [expanded, setExpanded] = React.useState<ExpandedState>({});

  const table = useReactTable({
    data,
    columns,
    state: {
      expanded,
    },
    onExpandedChange: setExpanded,
    getSubRows: (row) => row.subRows,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    debugTable: true,
  });

  return (
    <div className="p-2">
      <div className="h-2" />
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getCanFilter() ? <div></div> : null}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="h-2" />
      <div className="flex items-center gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div>{table.getRowModel().rows.length} Rows</div>
      <div>
        <button onClick={() => rerender()}>Force Rerender</button>
      </div>
      <div>
        <button onClick={() => refreshData()}>Refresh Data</button>
      </div>
      <pre>{JSON.stringify(expanded, null, 2)}</pre>
    </div>
  );
}
