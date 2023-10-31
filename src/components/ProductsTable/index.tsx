import * as React from 'react';
import DataTable, { ExpanderComponentProps } from 'react-data-table-component';

type DataRow = {
  name: string;
  category: string;
  price: number;
};

type TableColumn<T> = {
  name: string;
  selector: (row: T) => string | number;
};

const columns: TableColumn<DataRow>[] = [
  {
    name: 'Nome',
    selector: row => row.name
  },
  {
    name: 'Categoria',
    selector: row => row.category
  },
  {
    name: 'Preço',
    selector: row =>
      row.price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })
  }
];

const data: DataRow[] = [
  {
    name: 'Celular',
    category: 'Eletrônicos',
    price: 599.99
  },
  {
    name: 'Camiseta',
    category: 'Roupas',
    price: 49.95
  },
  {
    name: 'Bíblia',
    category: 'Livros',
    price: 14.99
  },
  {
    name: 'Delineador',
    category: 'Cosméticos',
    price: 29.99
  },
  {
    name: 'Carrinho',
    category: 'Brinquedos',
    price: 34.5
  }
];

const ExpandedComponent: React.FC<ExpanderComponentProps<DataRow>> = ({
  data: rowData
}) => {
  return <pre>{JSON.stringify(rowData, null, 2)}</pre>;
};

const ProductsTable = () => {
  return (
    <DataTable
      columns={columns}
      data={data}
      expandableRows
      expandableRowsComponent={ExpandedComponent}
    />
  );
};

export { ProductsTable };
