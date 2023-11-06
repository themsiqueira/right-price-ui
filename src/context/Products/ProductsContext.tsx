// eslint-disable-next-line
import {
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useState
} from 'react';
import { TableColumn } from 'react-data-table-component';

import { Columns } from '../../components/ProductsTable/Columns';
import { endpoints, envAddress } from '../../endpoints/endpointsRoutes';
import { customAPI } from '../../services/api';
import { ITableProducts } from '../../types/components/TableProducts';
import { mockedData } from './mockItems';

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsContextProps {
  columns: TableColumn<ITableProducts>[];
  postOCRFile: (containerName: string, fileName: string) => Promise<any>;
  tableItems: ITableProducts[];
}

const ProductsContext = createContext({} as ProductsContextProps);

const ProductsContextDataProvider = ({ children }: ProductsProviderProps) => {
  const [tableItems, setTableItems] = useState([] as ITableProducts[]);

  const api = customAPI(envAddress.local);

  const handleInfo = (row: ITableProducts) => {
    alert('works!');
    console.log(row);
  };

  const columns = Columns({ handleInfo });

  const postOCRFile = useCallback(
    // eslint-disable-next-line
    async (containerName: string, fileName: string) => {
      try {
        // const { data } = await api.post<any>(
        //   `${endpoints.ocr}/?container_name=${containerName}&blob_name=${fileName}`
        // );
        setTableItems(mockedData);
      } catch {
        console.log('error api call');
      }
    },
    []
  );

  const value = useMemo(() => {
    return {
      columns,
      postOCRFile,
      tableItems
    };
  }, [columns]);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsContextDataProvider };
