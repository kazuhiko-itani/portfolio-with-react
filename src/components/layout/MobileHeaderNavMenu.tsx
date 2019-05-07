import React, { FC } from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Link } from 'react-router-dom';

import { navigationLinks } from '../../data/navigationLinks';

const styles = (theme: Theme): StyleRules => createStyles({
    mobileHeaderNav: {
        position: 'relative',
        zIndex: 99,
        top: -120
    },
    navItemList: {
        display: 'flex',
        zIndex: 100,
    },
    navItem: {
        listStyle: 'none',
        fontSize: 18,
        paddingRight: 15
    },
    navItemLink: {
        color: theme.palette.primary.dark,
        textDecoration: 'none'
    },
    show: {
        position: 'absolute',
        transform: 'translateY(85px)',
        transition: '0.5s',
    },
    hide: {
        position: 'absolute',
        transform: 'translateY(-85px)',
        transition: '0.5s',
    }
})

interface Props {
    open: Boolean;
}

type PropsWithStyles = Props & WithStyles<typeof styles>;

const MobileHeaderNavMenu: FC<PropsWithStyles> =({ classes, open }) => (
    <div className={classes.mobileHeaderNav}>
        <div className={open ? classes.show : classes.hide }>
            <ul className={classes.navItemList}>
                {navigationLinks.map((link, index) => (
                    <li className={classes.navItem} key={index}>
                        <Link to={link.path} className={classes.navItemLink}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
)

export default withStyles(styles)(MobileHeaderNavMenu);