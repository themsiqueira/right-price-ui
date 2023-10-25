import { Button } from '@mui/material';

interface ActionButtonProps {
  title: string;
  //   type?: 'green' | 'light';
  //   size?: 'small' | 'regular' | 'large';
  handleAction: () => void;
  disabled?: boolean;
}

const ActionButton = ({ title, handleAction, disabled }: ActionButtonProps) => {
  return (
    <Button
      sx={{
        borderRadius: '20px',
        textTransform: 'none',
        backgroundColor: '#4DA96C',
        '&:hover': {
          backgroundColor: '#4DA96C'
        }
      }}
      variant="contained"
      // eslint-disable-next-line react/jsx-boolean-value
      disableRipple={true}
      disabled={disabled}
      onClick={handleAction}
    >
      {title}
    </Button>
  );
};

export { ActionButton };
