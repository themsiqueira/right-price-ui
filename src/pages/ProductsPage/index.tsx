/* eslint-disable react/button-has-type */

/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Container } from '@mui/material';
import { useEffect, useState } from 'react';

import ImageBg from '../../assets/static/19.png';
import {
  NavBar,
  NewProductModal,
  ProductCard,
  Reais2Number
} from '../../components';
import { DataProducts } from '../../context/Products/mockItems';
import { useProductsContext } from '../../hooks';

const ProductsPage = () => {
  const [sortingOption, setSortingOption] = useState('1');
  const originalProducts = DataProducts;
  const [products, setProducts] = useState(originalProducts);

  useEffect(() => {
    document.title = 'Produtos Cadastrados';
  }, []);

  const handleSortChange = (event: { target: { value: string } }) => {
    const selectedOption = event.target.value;
    setSortingOption(selectedOption);

    switch (selectedOption) {
      case '1':
        setProducts(
          [...originalProducts].sort((a, b) => a.name.localeCompare(b.name))
        );
        break;
      case '2':
        setProducts(
          [...originalProducts].sort((a, b) => {
            const bPrice = Reais2Number(b.newPrice);
            const aPrice = Reais2Number(a.newPrice);
            return bPrice - aPrice;
          })
        );
        break;
      case '3':
        setProducts(
          [...originalProducts].sort((a, b) => {
            const bPrice = Reais2Number(b.newPrice);
            const aPrice = Reais2Number(a.newPrice);
            return aPrice - bPrice;
          })
        );
        break;
      case '4':
        setProducts(
          [...originalProducts].sort((a, b) => {
            const bDiscount =
              ((Reais2Number(b.price) - Reais2Number(b.newPrice)) /
                Reais2Number(b.price)) *
              100;
            const aDiscount =
              ((Reais2Number(a.price) - Reais2Number(a.newPrice)) /
                Reais2Number(a.price)) *
              100;
            return bDiscount - aDiscount;
          })
        );
        break;
      case '5':
        setProducts(
          [...originalProducts].sort((a, b) =>
            a.category.localeCompare(b.category)
          )
        );
        break;
      case '6':
        setProducts(
          [...originalProducts].sort((a, b) => {
            const bDate = new Date(b.registerDate);
            const aDate = new Date(a.registerDate);
            return bDate.getTime() - aDate.getTime();
          })
        );
        break;
      default:
        setProducts(originalProducts);
        break;
    }
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
              <select
                className="ml-2 border border-gray-300 rounded-lg px-2 py-1 mr-4"
                value={sortingOption}
                onChange={handleSortChange}
              >
                <option value="1">Nome</option>
                <option value="2">Preço Maior-Menor</option>
                <option value="3">Menor Menor-Maior</option>
                <option value="4">Desconto Maior-Menor</option>
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
