import { TableColumn } from 'react-data-table-component';

import { ITableProducts } from '../../../types/components/TableProducts';
import { ColumnsActions } from '../ColumnsActions';

interface ColumnsProps {
  handleInfo: (row: ITableProducts) => void;
}

export const Columns = ({ handleInfo }: ColumnsProps) => {
  const columns: TableColumn<ITableProducts>[] = [
    {
      name: 'Nome',
      cell: row => row.name
    },
    {
      name: 'Preço',
      cell: row => row.price
    },
    {
      name: 'Ações',
      cell: row => {
        return <ColumnsActions handleInfo={() => handleInfo(row)} />;
      }
    }
  ];
  return columns;
};
