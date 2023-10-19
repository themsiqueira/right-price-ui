import logo from '../../assets/static/logo.png';
import { TextInput } from '../../components/TextInput';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link" target="_blank" rel="noopener noreferrer">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              paddingTop: '2rem'
            }}
          >
            <img
              src={logo}
              data-testid="logo-img-id"
              alt="logo"
              style={{
                width: '15rem'
              }}
            />
          </div>
        </a>
      </header>
      <TextInput />
    </div>
  );
};
export { Home };
