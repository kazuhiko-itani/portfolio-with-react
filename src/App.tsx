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
import Home from './components/pages/Home';
import About from './components/pages/About';
import Works from './components/pages/Works';

import './assets/css/common.css';
import withRoot from './utils/withRoot';
import createStyles from '@material-ui/core/styles/createStyles';

library.add(faTwitter, faGithub);

const styles = (theme: Theme): StyleRules => createStyles({
  container: {
    margin: '30px 15%',
    [theme.breakpoints.down('sm')]: {
      margin: '15px'
    }
  },
  content: {
    padding: '50px 50px',
    [theme.breakpoints.down('sm')]: {
      padding: '30px 20px'
    }
  },
  footer: {
    textAlign: 'center'
  }
});

const App: React.FC<WithStyles<typeof styles>> = ({ classes }: WithStyles<typeof styles>) => {
  return (
    <div className={classes.container}>
      <div>
        <Grid container>
          <Grid item sm={12} md={4}>
            <HeaderNav />
          </Grid>
        </Grid>
      </div>
      <div className={classes.content}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/works" component={Works} exact />
          <Redirect to="/" />
        </Switch>
      </div>
      <div className={classes.footer}>
          <Footer />
      </div>
    </div>
  );
}

export default withRoot(withStyles(styles)(App));
