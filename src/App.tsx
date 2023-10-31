import { AuthProvider } from './hooks/useAuth';
import { DefinedRoutes } from './routes/DefinedRoutes';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <DefinedRoutes />
    </AuthProvider>
  );
}

export default App;
