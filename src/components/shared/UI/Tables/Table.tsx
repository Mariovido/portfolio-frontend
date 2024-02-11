import { TableProps } from '../../../../models/interfaces/shared/UI/Tables/TableProps';

import './styles/Table.scss';

function Table(props: Readonly<TableProps>) {
  const { idTable, titles, values } = props;
  let index = 0;

  return (
    <table id={idTable} className="table">
      <thead className="table-header">
        <tr>
          {titles.map((title) => {
            return <th key={++index}>{title}</th>;
          })}
        </tr>
      </thead>
      <tbody className="table-body">
        {values.map((row) => (
          <tr key={++index}>
            {row.map((rowItem) => (
              <td key={++index}>{rowItem}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
