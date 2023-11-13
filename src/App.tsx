import './App.css';
import { AuthProvider } from './hooks/useAuth';
import { DefinedRoutes } from './routes/DefinedRoutes';

function App() {
  return (
    <AuthProvider>
      <DefinedRoutes />
    </AuthProvider>
  );
}

export default App;
