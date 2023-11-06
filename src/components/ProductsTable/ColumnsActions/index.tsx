import { IconButton, Tooltip } from '@mui/material';
import { IoMdInformationCircleOutline } from 'react-icons/io';

interface ColumnActionProps {
  handleInfo: () => void;
}

const ColumnsActions = ({ handleInfo }: ColumnActionProps) => {
  return (
    <Tooltip title={<p>Informações</p>}>
      <IconButton
        data-testid="info-table-products"
        sx={{ color: 'black' }}
        disableFocusRipple
        onClick={handleInfo}
      >
        <IoMdInformationCircleOutline
          size="20px"
          style={{ cursor: 'pointer' }}
        />
      </IconButton>
    </Tooltip>
  );
};

export { ColumnsActions };
