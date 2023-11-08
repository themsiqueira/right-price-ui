import { Link } from '@mui/material';

import { ActionButton } from '../UI';

const NavBar = () => {
  return (
    <div className="flex w-full h-20 bg-white justify-between items-center p-4">
      <div className="flex justify-between gap-[5rem]">
        <a href="/">
          <p className="text-2xl text-blue-500 font-bold">Preço Certo</p>
        </a>
        <div className="flex gap-12">
          <div className="flex justify-center items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-2xl">
            <Link href="/" underline="none" color="inherit">
              Início
            </Link>
          </div>
          <div className="flex justify-center items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-2xl">
            <Link href="/products" underline="none" color="inherit">
              Produtos
            </Link>
          </div>
          <div className="flex justify-center items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-2xl">
            <Link underline="none" color="inherit">
              Como começar
            </Link>
          </div>
          <div className="flex justify-center items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-2xl">
            <Link href="/about" underline="none" color="inherit">
              Sobre nós
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="p-12">
          <ActionButton
            title="Acessar Portal"
            handleAction={() => {
              // console.log('call api login');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export { NavBar };
