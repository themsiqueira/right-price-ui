import { NavBar, NewProductButton, ProductsTable } from '../../components';

const ProductsPage = () => {
  return (
    <>
      <NavBar />
      <div className="w-full bg-blue-100 p-4">
        <div className="mx-auto m-10 md:w-2/3 h-7/10 border border-gray-200 shadow-xl rounded-xl bg-white">
          <div className="grid grid-cols-3 h-1/3 px-6 w-full bg-blue-300 rounded-t-xl">
            <h1 className="col-start-2 h-full flex justify-center items-center text-white text-2xl font-semibold py-6">
              Produtos Cadastrados
            </h1>
            <div className="flex justify-end items-center">
              <NewProductButton />
            </div>
          </div>
          <div />
          <div className="p-4">
            <ProductsTable />
          </div>
        </div>
      </div>
    </>
  );
};

export { ProductsPage };
