import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, {
  WithStyles,
  StyleRules
} from '@material-ui/core/styles/withStyles';

import { Grid } from '@material-ui/core';

import HeaderNav from './container/layout/HeaderNav';

import './App.css';
import withRoot from './utils/withRoot';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme: Theme): StyleRules => createStyles({
  headerNav: {
    padding: '30px',
    [theme.breakpoints.down('sm')]: {
      padding: 15,
    }
  },
});

const App: React.FC<WithStyles<typeof styles>> = ({ classes }: WithStyles<typeof styles>) => {
  return (
    <Grid container>
      <Grid item sm={12} md={4} className={classes.headerNav}>
        <HeaderNav />
      </Grid>
    </Grid>
  );
}

export default withRoot(withStyles(styles)(App));
