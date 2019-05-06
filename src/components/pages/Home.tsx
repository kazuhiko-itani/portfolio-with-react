import React, { FC } from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import Typography from '@material-ui/core/Typography'

import MainImage from '../../assets/img/mainImage.jpg';

const styles = (theme: Theme): StyleRules => createStyles({
    title: {
        fontFamily: "'Courgette', cursive",
        color: theme.palette.primary.dark,
        fontSize: 60,
        letterSpacing: 1,
        lineHeight: 1.2,
        paddingRight: 50,
        [theme.breakpoints.down('sm')]: {
            fontSize: 40,
            paddingRight: 20,
        }
    },
    image: {
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '80%'
        }
    }
});

const Home: FC<WithStyles<typeof styles>> = ({ classes }) => (
    <div>
        <Typography variant="h2" align="right" className={classes.title}>
            Akashixi<br />Portfolio<br />Site
        </Typography>
        <img src={MainImage} alt="猫の写真" className={classes.image} />
    </div>
);

export default withStyles(styles)(Home);