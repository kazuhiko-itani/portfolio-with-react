import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, {
  WithStyles,
  StyleRules
} from '@material-ui/core/styles/withStyles';
import { Grid } from '@material-ui/core';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

import HeaderNav from './container/layout/HeaderNav';
import Footer from './components/layout/Footer';

import './assets/common.css';
import withRoot from './utils/withRoot';
import createStyles from '@material-ui/core/styles/createStyles';

library.add(faTwitter, faGithub);

const styles = (theme: Theme): StyleRules => createStyles({
  headerNav: {
    padding: '30px',
    [theme.breakpoints.down('sm')]: {
      padding: 15,
    }
  },
  footer: {
    textAlign: 'center'
  }
});

const App: React.FC<WithStyles<typeof styles>> = ({ classes }: WithStyles<typeof styles>) => {
  return (
    <div>
      <Grid container>
        <Grid item sm={12} md={4} className={classes.headerNav}>
          <HeaderNav />
        </Grid>
      </Grid>
      <div className={classes.footer}>
          <Footer />
      </div>
    </div>
  );
}

export default withRoot(withStyles(styles)(App));
