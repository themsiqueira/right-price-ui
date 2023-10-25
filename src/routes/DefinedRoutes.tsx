import { Route, Routes } from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage';
import { Home } from '../pages';
import { AboutPage } from '../pages/About';

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
      </Route>
    </Routes>
  );
};

export { DefinedRoutes };
