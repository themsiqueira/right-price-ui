import Container from '@mui/material/Container';

import ImageBg from '../../assets/static/19.png';
import { NavBar } from '../../components';

const AboutPage = () => {
  return (
    <>
      <NavBar />
      <div
        style={{
          backgroundImage: `url(${ImageBg})`,
          height: '100vh',
          width: '100%',
          backgroundSize: 'cover',
          position: 'relative'
        }}
      >
        <Container sx={{ height: '100%' }}>
          <div className="bg-white h-[100vh]">Sobre nós</div>
        </Container>
      </div>
    </>
  );
};

export { AboutPage };
