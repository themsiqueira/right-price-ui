import { useContext } from 'react';

import { ProductsContext } from '../../context';

function useProductsContext() {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error('useProductsContext must be used within a ProductContext');
  }
  return context;
}

export { useProductsContext };
