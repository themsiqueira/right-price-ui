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
//   eslint-disable-next-line
import { envAddress } from '../../endpoints/endpointsRoutes';
//   eslint-disable-next-line
import { customAPI } from '../../services/api';
import { ITableProducts } from '../../types/components/TableProducts';
import { mockedData } from './mockItems';

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsContextProps {
  columns: TableColumn<ITableProducts>[];
  //   eslint-disable-next-line
  postOCRFile: (containerName: string, fileName: string) => Promise<any>;
  tableItems: ITableProducts[];
}

const ProductsContext = createContext({} as ProductsContextProps);

const ProductsContextDataProvider = ({ children }: ProductsProviderProps) => {
  const [tableItems, setTableItems] = useState([] as ITableProducts[]);

  //   const api = customAPI(envAddress.local);

  const handleInfo = (row: ITableProducts) => {
    // alert('works!');
    // eslint-disable-next-line
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
        // eslint-disable-next-line
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
    // eslint-disable-next-line
  }, [columns]);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsContextDataProvider };
