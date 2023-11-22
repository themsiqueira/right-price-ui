import React, { useEffect, useState } from 'react';

import { Product } from '../../types/components/Product';

type ProductCardProps = {
  name: Product['name'];
  price: Product['price'];
  newPrice: Product['newPrice'];
  category: Product['category'];
  market: Product['market'];
  imageUrl: Product['imageUrl'];
};

const Reais2Number = (value: string) => {
  return Number(value.replace('R$ ', '').replace(',', '.'));
};

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  newPrice,
  category,
  market,
  imageUrl
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.onload = () => setIsLoading(false);
    image.src = imageUrl;
  }, [imageUrl]);

  const discountPercentage = Math.round(
    ((Reais2Number(price) - Reais2Number(newPrice)) / Reais2Number(price)) * 100
  ).toString();

  return (
    <div className="w-full max-w-sm bg-white border rounded-xl shadow">
      <div className="cursor-pointer">
        {!isLoading && (
          <img
            className="p-8 rounded-xl mx-auto aspect-square"
            src={imageUrl}
            alt={name}
          />
        )}
        {isLoading && (
          <div className="p-8">
            <div className="animate-pulse bg-gray-300 mx-auto aspect-square rounded-xl" />
          </div>
        )}
      </div>
      <div className="px-5 pb-2">
        <div className="h-16 line-clamp-2 text-lg font-semibold tracking-tight text-gray-900 text-ellipsis">
          {name}
        </div>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-sm font-medium text-blue-500">{market}</span>
          <span className="text-sm text-gray-900">{category}</span>
        </div>
      </div>
      <div className="p-4 flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-600 line-through">{price}</p>
          <p className="text-2xl font-semibold text-blue-600">{newPrice}</p>
        </div>
        <div className="text-lg font-semibold text-green-500">
          {discountPercentage}% OFF
        </div>
      </div>
    </div>
  );
};
export { ProductCard };
