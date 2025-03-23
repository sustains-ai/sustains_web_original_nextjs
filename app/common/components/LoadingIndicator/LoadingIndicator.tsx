import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';

type loaderPopsType = {
  loading?: any
}
export const LoadingIndicator = ({ loading }:loaderPopsType) => {

  return (
    <Backdrop open = {loading}  style = {{ zIndex: 9999, color: '#fff' }}>
      <CircularProgress color = "primary" />
    </Backdrop>
  );
};