import DataTable, { TableProps, createTheme } from 'react-data-table-component';

// eslint-disable-next-line
interface DataTableThemeProps extends TableProps<any> {
  noDataTitle?: string;
}

const DataTableThemed = ({ noDataTitle, ...rest }: DataTableThemeProps) => {
  createTheme(
    'dataTableTheme',
    {
      typography: {
        fontFamily: '',
        fontSize: '14px',
        fontColor: '#000000'
      },
      spacing: {
        tableSpacing: '16px',
        columnSpacing: '8px'
      }
    },
    'light'
  );

  return (
    <div style={{ boxShadow: '5px 4px 4px rgb(0, 0, 0, 0.25)' }}>
      <DataTable
        theme="dataTableTheme"
        paginationComponentOptions={{
          rowsPerPageText: 'Registros por página:',
          rangeSeparatorText: 'de',
          noRowsPerPage: false,
          selectAllRowsItem: true,
          selectAllRowsItemText: 'Todos'
        }}
        customStyles={{
          contextMenu: {
            style: {
              backgroundColor: 'rgb:(250, 250, 250)'
            }
          }
        }}
        noDataComponent={
          <div>
            <p>{noDataTitle || 'Nenhum produto encontrado'}</p>
          </div>
        }
        {...rest}
      />
    </div>
  );
};

export { DataTableThemed };
