import React from 'react';
import Grid from '@material-ui/core/Grid';
import Recent from '../Recent';
import Search from '../Search'

const Home = () => {
  return (
    <Grid container spacing={3}>
         <Search />
         <Recent />
    </Grid>
  );
};

export default Home;
