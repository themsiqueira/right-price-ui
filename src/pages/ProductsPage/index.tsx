import { useState } from 'react';

import { NavBar, ProductsTable } from '../../components';
import { useProductsContext } from '../../hooks';
import './ProductsPage.css';

const ProductsPage = () => {
  const { columns, tableItems, postOCRFile } = useProductsContext();
  // const { items, setContainerAndFile } = useContext(AzureStorageContext); // Destructure the needed context values and functions

  const [containerName, setContainerName] = useState('');
  const [fileName, setFileName] = useState('');

  // This is a mock function to illustrate setting the context
  // You should replace this with the actual logic to fetch data from Azure
  // eslint-disable-next-line
  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Here you would fetch the data from Azure and update your context
    postOCRFile(containerName, fileName);
  };
  // eslint-disable-next-line
  console.log(tableItems);

  return (
    <>
      <NavBar />
      <div className="your-component">
        <div className="background-style">
          <form onSubmit={handleSubmit}>
            <div className="input-card">
              <input
                type="text"
                placeholder="Enter container name"
                value={containerName}
                onChange={e => setContainerName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter file name"
                value={fileName}
                onChange={e => setFileName(e.target.value)}
              />
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="data-table-container">
        <ProductsTable
          className="data-table-container"
          data={tableItems}
          columns={columns}
        />
      </div>
    </>
  );
};

export { ProductsPage };
