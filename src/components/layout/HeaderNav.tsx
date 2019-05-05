import React, { FC } from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import MobileHeaderNavMenu from './MobileHeaderNavMenu';
import { navigationLinks } from '../../data/navigationLinks';

const styles = (theme: Theme): StyleRules => createStyles({
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    navItem: {
        fontSize: 18,
        textDecoration: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    iconButton: {
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    menuIcon: {
        fontSize: 32
    },
    show: {
        display: 'block'
    },
    hide: {
        display: 'none'
    }
});

interface Props {
    open: Boolean;
    toggle: () => void;
};

type PropsWithStyles = Props & WithStyles<typeof styles>;

const HeaderNav: FC<PropsWithStyles> = ({ classes, open, toggle }) => (
    <nav className={classes.nav}>
        {navigationLinks.map((link, index) => (
            <a href={link.path} className={classes.navItem} key={index}>{link.name}</a>
        ))}
        <IconButton className={classes.iconButton} color="inherit" aria-label="Menu" onClick={toggle}>
            <MenuIcon className={classes.menuIcon} />
            <MobileHeaderNavMenu open={open} />
        </IconButton>    
    </nav>
);

export default withStyles(styles)(HeaderNav);