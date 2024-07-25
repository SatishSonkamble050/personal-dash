import React from 'react';
import useStore from '../store/store';

const ResponsiveTable = ({ headers, rows, onAction }) => {
  const { theme } = useStore();
  if (rows.length === 0) {
    return <div>No Data......</div>;
  }

  return (
    <div className="container">
      <div className="wrapper">
        <table className={`table ${theme === 'light' ? 'lightTheme' : 'darkTheme'}`}>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} className="header">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className="cell">
                  <button
                    onClick={() => onAction(rowIndex)}
                    className="button"
                  >
                    Remove
                  </button>
                </td>
                <td className="cell">
                  <a
                    href={row}
                    className="cell-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {row}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResponsiveTable;
