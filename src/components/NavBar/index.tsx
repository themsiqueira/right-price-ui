import { Divider, Link } from '@mui/material';
import { ActionButton } from '../UI';

const NavBar = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        minHeight: '48px',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          display: 'flex',
          //   backgroundColor: 'red',
          justifyContent: 'space-between',
          gap: '5rem'
        }}
      >
        <div
        // style={{ backgroundColor: 'purple' }}
        >
          {/* <p>LOGO</p> */}
          LOGO
        </div>
        <div
          style={{
            display: 'flex',
            //  backgroundColor: 'pink',
            gap: '3rem'
          }}
        >
          <div>
            <Link
              href="/"
              underline="none"
              color="inherit"
              sx={{
                display: 'inline-block', // Make the link an inline-block element
                padding: '10px 20px', // Add padding to create the button effect
                // backgroundColor: 'rgba(0, 0, 0, 0.1)', // Background color for the button
                borderRadius: '20px', // Add rounded corners
                '&:hover': {
                  backgroundColor: '#cbcdd1' // Change the background color to a darker gray on hover
                }
              }}
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              //   href="#"
              underline="none"
              color="inherit"
              sx={{
                display: 'inline-block', // Make the link an inline-block element
                padding: '10px 20px', // Add padding to create the button effect
                // backgroundColor: 'rgba(0, 0, 0, 0.1)', // Background color for the button
                borderRadius: '20px', // Add rounded corners
                '&:hover': {
                  backgroundColor: '#cbcdd1' // Change the background color to a darker gray on hover
                }
              }}
            >
              Features
            </Link>
          </div>
          <div>
            <Link
              //   href="#"
              underline="none"
              color="inherit"
              sx={{
                display: 'inline-block', // Make the link an inline-block element
                padding: '10px 20px', // Add padding to create the button effect
                // backgroundColor: 'rgba(0, 0, 0, 0.1)', // Background color for the button
                borderRadius: '20px', // Add rounded corners
                '&:hover': {
                  backgroundColor: '#cbcdd1' // Change the background color to a darker gray on hover
                }
              }}
            >
              How it Works
            </Link>
          </div>
          <div>
            <Link
              href="/about"
              underline="none"
              color="inherit"
              sx={{
                display: 'inline-block', // Make the link an inline-block element
                padding: '10px 20px', // Add padding to create the button effect
                // backgroundColor: 'rgba(0, 0, 0, 0.1)', // Background color for the button
                borderRadius: '20px', // Add rounded corners
                '&:hover': {
                  backgroundColor: '#cbcdd1' // Change the background color to a darker gray on hover
                }
              }}
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
      <div
        style={{
          alignContent: 'flex-end',
          justifyContent: 'flex-end'
        }}
      >
        <div style={{ paddingRight: '3rem' }}>
          <ActionButton
            title="Acessar Portal"
            handleAction={() => {
              console.log('call api login');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export { NavBar };
