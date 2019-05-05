import React, { FC } from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = (theme: Theme): StyleRules => createStyles({
    icon: {
        fontSize: 24,
        margin: 10
    },
    copyright: {
        paddingTop: 10
    }
});

const Footer: FC<WithStyles<typeof styles>> = ({ classes }) => (
    <nav>
        <div>
            <a href="https://twitter.com/akashi__akashi" target="_blank" className={classes.icon}>
                <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
            <a href="https://github.com/kazuhiko-itani" target="_blank" className={classes.icon}>
                <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
        </div>
        <div className={classes.copyright}><small>&copy; 2019 Akashixi</small></div>
    </nav>
);

export default withStyles(styles)(Footer);