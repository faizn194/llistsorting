import React from 'react';
import { useTable, useSortBy } from 'react-table'

function App() {
  const data = React.useMemo(
    () => [
      {id: 1, name: 'Faizan',age: 22,DOB: 1996},
      {id: 2,name: 'Ali',age: 19,DOB: 2001},
      {id: 3,name: 'Umer',age: 53,DOB: 1999},
      {id: 4,name: 'Ahsan',age: 25,DOB: 2010},
      {id: 5,name: 'Bilal',age: 15,DOB: 2005},
    ],
    []
  )

  const columns = React.useMemo(
    () => [

      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'age',
        accessor: 'age',
      },
      {
        Header: 'Date of Birth',
        accessor: 'DOB',
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data },
    useSortBy)

  return (
    <table {...getTableProps()} >
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())} >
                {column.render('Header')}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? '' : '') : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default App;
