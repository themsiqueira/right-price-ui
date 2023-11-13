import { Route, Routes } from 'react-router-dom';

import { ProductsContextDataProvider } from '../context';
import { Home } from '../pages';
import { AboutPage } from '../pages/About';
import { LandingPage } from '../pages/LandingPage';
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
        <Route
          path="/products"
          element={
            <ProductsContextDataProvider>
              <ProductsPage />
            </ProductsContextDataProvider>
          }
        />
      </Route>
    </Routes>
  );
};

export { DefinedRoutes };
