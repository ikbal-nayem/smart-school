import React from 'react';
import {Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}



export default function Toast({message, type}) {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar 
      open={open} 
      autoHideDuration={6000} 
      onClose={handleClose}
      anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
    >
      <Alert severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
}
