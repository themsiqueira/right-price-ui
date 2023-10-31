import { IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const NewProductButton = () => {
  return (
    <IconButton color="primary" aria-label="add new product">
      <FontAwesomeIcon
        icon={faPlus}
        className="text-white hover:text-blue-500"
      />
    </IconButton>
  );
};

export { NewProductButton };
