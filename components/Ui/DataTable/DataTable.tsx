import React, { useState, useEffect } from "react";

interface Column {
  key: string;
  label: string;
  render?: (value: any, row?: any) => React.ReactNode;
  sortable?: boolean;
}

interface DataTableProps {
  data: any[];
  columns: Column[];
  title?: string;
  onAdd?: () => void;
  onRowClick?: (row: any) => void;
}

export default function DataTable({
  data = [],
  columns = [],
  title = "Data Table",
  onAdd = () => {},
  onRowClick,
}: DataTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedData, setSortedData] = useState<any[]>([]);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "ascending" | "descending";
  } | null>(null);

  useEffect(() => {
    let filteredData = [...data];

    if (searchTerm) {
      filteredData = data.filter(item =>
        Object.values(item).some(
          value =>
            value &&
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    if (sortConfig) {
      filteredData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }

    setSortedData(filteredData);
  }, [data, searchTerm, sortConfig]);

  const requestSort = (key: string) => {
    // Find column by key
    const column = columns.find(col => col.key === key);

    // Only sort if column is sortable (default to true if not specified)
    if (column && column.sortable !== false) {
      let direction: "ascending" | "descending" = "ascending";
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === "ascending"
      ) {
        direction = "descending";
      }
      setSortConfig({ key, direction });
    }
  };

  const getSortIcon = (columnKey: string) => {
    const column = columns.find(col => col.key === columnKey);

    if (column && column.sortable === false) return "";

    if (!sortConfig || sortConfig.key !== columnKey) return "↕️";
    return sortConfig.direction === "ascending" ? "↑" : "↓";
  };

  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden shadow-md p-4 bg-gray-800 text-gray-200">
      <div className="flex flex-col mb-4">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <div className="flex justify-between items-center mt-2">
          <div>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="py-2 px-3 border border-gray-600 rounded-md w-64 bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={onAdd}
            className="py-2 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            + Add Data
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {columns.map(column => (
                <th
                  key={column.key}
                  onClick={() => requestSort(column.key)}
                  className={`bg-gray-700 px-4 py-3 text-left font-semibold border-b border-gray-600 ${
                    column.sortable !== false
                      ? "cursor-pointer hover:bg-gray-600"
                      : ""
                  } text-gray-200`}
                >
                  {column.label} {getSortIcon(column.key)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.length > 0 ? (
              sortedData.map((row, index) => (
                <tr
                  key={index}
                  onClick={() => onRowClick && onRowClick(row)}
                  className={`${
                    onRowClick ? "cursor-pointer hover:bg-gray-700" : ""
                  }`}
                >
                  {columns.map(column => (
                    <td
                      key={`${index}-${column.key}`}
                      className="px-4 py-3 border-b border-gray-600 text-gray-300"
                    >
                      {column.render
                        ? column.render(row[column.key], row)
                        : row[column.key]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center py-6 text-gray-400"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
