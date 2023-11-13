import { CircularProgress } from '@mui/material';
import { useMemo } from 'react';
import { TableColumn } from 'react-data-table-component';

import { ITableProducts } from '../../types/components/TableProducts';
import { DataTableThemed } from '../UI/DataTableThemed';

type dataProps = ITableProducts[];

interface ProductsTableProps {
  data: dataProps;
  //   eslint-disable-next-line
  columns: TableColumn<any>[];
  progressPending?: boolean;
  className?: string;
}

const ProductsTable = ({
  data,
  columns,
  progressPending,
  className
}: ProductsTableProps) => {
  const LoadingComponent = useMemo(() => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '200px'
        }}
      >
        <CircularProgress />
      </div>
    );
  }, []);

  return (
    <DataTableThemed
      className={className}
      columns={columns}
      data={data}
      progressPending={progressPending}
      progressComponent={LoadingComponent}
      highlightOnHover
      noDataComponent="Nenhum produto encontrado"
    />
  );
};

export { ProductsTable };
