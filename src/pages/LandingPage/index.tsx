import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { MdDiscount } from 'react-icons/md';

import ImageBg from '../../assets/static/19.png';
import { NavBar } from '../../components';

const LandingPage = () => {
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
          <div className="grid grid-cols-2 p-10 gap-8 bg-gradient-to-b from-blue-200 to-white h-[50vh]">
            <div className="mx-4 mt-16">
              <p className="text-end text-4xl font-sans text-blue-500 font-bold mr-10 mb-4">
                Preço Certo
              </p>
              <p className="text-end font-sans text-blue-500 font-semibold text-lg">
                Encontre os melhores preços para os mercados mais próximos de
                você
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Button
                size="large"
                href="#"
                variant="contained"
                endIcon={<MdDiscount />}
              >
                Economize Já
              </Button>
            </div>
          </div>
          <div className="bg-white h-[50vh]">teste</div>
        </Container>
      </div>
    </>
  );
};

export { LandingPage };
