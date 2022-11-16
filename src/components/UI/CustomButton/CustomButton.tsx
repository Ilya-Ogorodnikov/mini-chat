import { FC } from 'react';
import { Button } from '@mui/material';

import { ICustomButtonProps } from '../../../models';
import { buttonStyles } from '../../../utils/constants';

const CustomButton: FC<ICustomButtonProps> = ({
  children,
  onClick,
  type,
  disabled,
}) => (
  <Button
    variant="outlined"
    sx={buttonStyles}
    onClick={onClick}
    type={type}
    disabled={disabled}
  >
    {children}
  </Button>
);

export default CustomButton;
