import { Product } from '../../types/components/Product';
import { ITableProducts } from '../../types/components/TableProducts';

export const mockedData: ITableProducts[] = [
  {
    name: 'Doriana Margarina',
    price: 'R$ 50,00'
  },
  {
    name: 'Arroz',
    price: 'R$ 85,00'
  },
  {
    name: 'Arroz',
    price: 'R$19.99'
  },
  {
    name: 'Fralda descartável Huggies Supremme',
    price: 'R$ 99,30 (com desconto de 67,19%)'
  },
  {
    name: 'Sonho',
    price: 'R$2,89'
  },
  {
    name: 'Frimesa Linguica de Pernil Suino Congelada Pacote',
    price: 'R$ 13.99'
  },
  {
    name: 'accda',
    price: 'toog'
  },
  {
    name: 'pela',
    price: 'rs'
  },
  {
    name: 'Salsicha Perdigão',
    price: 'R$ 8.29/kg'
  },
  {
    name: 'Folo Nento',
    price: '14'
  },
  {
    name: 'Toddy',
    price: 'R$ 15.19'
  },
  {
    name: 'Linguica',
    price: 'R$ 21,90/kg'
  },
  {
    name: 'Pano',
    price: 'R$ 5,199'
  },
  {
    name: 'Borrussio',
    price: 'R$ 20.40'
  },
  {
    name: 'Farinha de Trigo Nordeste',
    price: 'R$ 3.99'
  },
  {
    name: 'Lava-roupas Xpert Ariel Liquido',
    price: 'R$ 34,90'
  },
  {
    name: 'Massa com Ovos Isabela',
    price: 'R$ 3,15'
  },
  {
    name: 'Suco Valle Del 1000 Sobores Ro R Loos',
    price: 'R$ 8,50'
  },
  {
    name: 'Caixa de Bombom Neugebauer',
    price: 'R$ 59,00'
  },
  {
    name: 'Lando',
    price: 'R$ 1699'
  },
  {
    name: 'Creme de Leite Pirocãnjug Piracanjuba 0% Gordura',
    price: 'R$3,50'
  },
  {
    name: 'Queijo Mucarela',
    price: 'R$ 3.19'
  },
  {
    name: 'Amaciante de Roupas Downy Concentrado',
    price: 'R$ 28,90'
  },
  {
    name: 'Carne Moída Bovina',
    price: 'R$ 98.60'
  },
  {
    name: 'Leite',
    price: 'R$ 5,79'
  },
  {
    name: 'Lnando',
    price: 'RS 649'
  },
  {
    name: 'Costela Bovina',
    price: 'R$ 19,10'
  },
  {
    name: 'Papel Higiênico Personal Vip',
    price: 'R$14'
  },
  {
    name: 'Toddynho',
    price: 'R$ 1.85'
  },
  {
    name: 'Lando Bonduclle Roatctonal Lata 17g',
    price: 'R$ 3.00'
  },
  {
    name: 'Budweiser Longneck',
    price: 'R$ 149,00'
  }
];

export const DataProducts: Product[] = [
  {
    id: 1,
    name: 'Suco de Laranja Integral 2L',
    price: 'R$ 20,99',
    newPrice: 'R$ 15,99',
    category: 'Bebidas',
    market: 'Extra',
    imageUrl:
      'https://naturalone.vteximg.com.br/arquivos/ids/157672-1000-1000/SUCO_DE_LARANJA_INTEGRAL_2L_REFRIGERADO_-_NATURAL_ONE-01.jpg?v=638210558304170000',
    registerDate: '2021-08-01'
  },
  {
    id: 2,
    name: 'Arroz Namorado 5Kg',
    price: 'R$ 21,49',
    newPrice: 'R$ 15,79',
    category: 'Alimentos',
    market: 'Carrefour',
    imageUrl:
      'https://a-static.mlcdn.com.br/280x210/arroz-tipo-1-namorado-5-kg/merceariaeldorado/e309b7d872ac11ee84aa4201ac185040/4fd1529c9ab5b63e0a658899f2bd47ec.jpeg',
    registerDate: '2021-08-01'
  },
  {
    id: 3,
    name: 'Arroz Camil 5Kg',
    price: 'R$ 25,49',
    newPrice: 'R$ 19,99',
    category: 'Alimentos',
    market: 'Tenda Atacado',
    imageUrl:
      'https://a-static.mlcdn.com.br/800x560/arroz-agulhinha-tipo-1-camil-5kg/belamaisdoces/142c1958e2b511eb86d64201ac18500e/b771480695a00c022374b0269c8b1c8e.jpeg',
    registerDate: '2021-08-01'
  },
  {
    id: 4,
    name: 'Fralda Descartável Huggies Supremme',
    price: 'R$ 99,30',
    newPrice: 'R$ 75,00',
    category: 'Bebês',
    market: 'Supermercado',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/614emgYKMgL._AC_UL400_SR400,400_.jpg',
    registerDate: '2021-08-01'
  },
  {
    id: 5,
    name: 'Pacote de Bombom Sonho de Valsa 1Kg',
    price: 'R$ 72,04',
    newPrice: 'R$ 39,99',
    category: 'Alimentos',
    market: 'Magazine Luiza',
    imageUrl:
      'https://a-static.mlcdn.com.br/800x560/chocolate-sonho-de-valsa-pacote-1kg/efacil/1504620/a40e204fff5091017d62622dc3d76205.jpeg',
    registerDate: '2021-08-01'
  },
  {
    id: 6,
    name: 'Frimesa Linguica de Pernil Suino Congelada Pacote 1Kg',
    price: 'R$ 24,99',
    newPrice: 'R$ 19,99',
    category: 'Alimentos',
    market: 'Mercado Família',
    imageUrl:
      'https://www.frimesa.com.br/upload/image/subproduct/linguica_pernil_congelada_1kg1-61-14.png',
    registerDate: '2021-08-01'
  },
  {
    id: 7,
    name: 'Cerveja Antarctica Original 600ml',
    price: 'R$ 10,99',
    newPrice: 'R$ 8,99',
    category: 'Bebidas',
    market: 'Mercado Família',
    imageUrl:
      'https://emporiodacerveja.vtexassets.com/arquivos/ids/155442-800-auto?v=635854323131600000&width=800&height=auto&aspect=true',
    registerDate: '2021-08-01'
  },
  {
    id: 8,
    name: 'Cerveja Budweiser American Lager 330ml Long Neck',
    price: 'R$ 6,99',
    newPrice: 'R$ 4,99',
    category: 'Bebidas',
    market: 'Mercado Família',
    imageUrl: 'https://static.paodeacucar.com/img/uploads/1/322/24782322.jpg',
    registerDate: '2021-08-01'
  },
  {
    id: 9,
    name: 'Pipoca de Microondas Yoki 100g',
    price: 'R$ 4,99',
    newPrice: 'R$ 1,99',
    category: 'Alimentos',
    market: 'Mercado Família',
    imageUrl: 'https://static.paodeacucar.com/img/uploads/1/948/24857948.jpg',
    registerDate: '2021-08-01'
  },
  {
    id: 10,
    name: 'Cerveja Heineken Longneck 330ml',
    price: 'R$ 9,99',
    newPrice: 'R$ 6,49',
    category: 'Bebidas',
    market: 'Mercado Família',
    imageUrl: 'https://static.paodeacucar.com/img/uploads/1/517/24095517.jpg',
    registerDate: '2021-08-01'
  }
];
