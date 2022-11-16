import { FC } from 'react';
import { CircularProgress, Container, Grid } from '@mui/material';

const Loader: FC = () => (
  <Container>
    <Grid
      container
      sx={{ height: window.innerHeight - 50 }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid container alignItems="center" direction="column">
        <CircularProgress color="secondary" />
      </Grid>
    </Grid>
  </Container>
);

export default Loader;
