import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton } from '@mui/material';
import Modal from '@mui/material/Modal';
import * as React from 'react';

const modalClass =
  'p-8 w-full md:w-1/2 lg:w-1/3 rounded-lg md:rounded-xl bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';

const NewProductModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton
        color="primary"
        aria-label="add new product"
        onClick={handleOpen}
      >
        <div className="text-blue-500 text-base">
          Adicionar Produto <FontAwesomeIcon icon={faPlus} className="ml-1" />
        </div>
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={modalClass}>exemplo</div>
      </Modal>
    </div>
  );
};

export { NewProductModal };
