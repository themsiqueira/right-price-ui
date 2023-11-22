/* eslint-disable react/button-has-type */

/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Container } from '@mui/material';
import { useEffect, useState } from 'react';

import ImageBg from '../../assets/static/19.png';
import { NavBar, NewProductModal, ProductCard } from '../../components';
import { DataProducts } from '../../context/Products/mockItems';
import { useProductsContext } from '../../hooks';

const ProductsPage = () => {
  const products = DataProducts;

  useEffect(() => {
    document.title = 'Produtos Cadastrados';
  }, []);

  const handleFilter = () => {
    console.log('filter');
  };

  return (
    <>
      <NavBar />
      <div
        style={{
          backgroundImage: `url(${ImageBg})`,
          height: 'max-content',
          width: '100%',
          backgroundSize: 'cover',
          position: 'relative'
        }}
      >
        <Container sx={{ height: '100%', paddingY: '16px' }}>
          <div className="bg-white font-semibold mb-4 p-2 md:px-8 md:py-4 rounded-lg flex flex-col gap-2 md:grid md:grid-cols-2 lg:grid-cols-3 items-center">
            <p className="">Produtos cadastrados: {products.length}</p>
            <div className="flex justify-center items-center">
              <NewProductModal />
            </div>
            <div className="md:col-span-2 lg:col-span-1 flex justify-center lg:justify-end items-center">
              Classificar por:
              <select className="ml-2 border border-gray-300 rounded-lg px-2 py-1 mr-4">
                <option value="1" selected>
                  Nome
                </option>
                <option value="2">Preço Maior-Menor</option>
                <option value="3">Menor Menor-Maior</option>
                <option value="4">Mercado</option>
                <option value="5">Categoria</option>
                <option value="6">Mais Recentes</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products &&
              products.map(product => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  newPrice={product.newPrice}
                  category={product.category}
                  market={product.market}
                  imageUrl={product.imageUrl}
                />
              ))}
            ;
          </div>
        </Container>
      </div>
    </>
  );
};

export { ProductsPage };
