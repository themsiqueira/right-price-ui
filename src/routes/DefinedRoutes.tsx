import { Route, Routes } from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage';
import { Home } from '../pages';
import { AboutPage } from '../pages/About';
import { ProductsPage } from '../pages/ProductsPage';

const DefinedRoutes = () => {
  return (
    <Routes>
      {/* {loading === true && userData === null && (
                <Route path="*" element={<LoadingSpinner />} />
            )} */}
      <Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homepage" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
};

export { DefinedRoutes };
