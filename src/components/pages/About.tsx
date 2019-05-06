import React, { FC } from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'

import myIcon from '../../assets/img/myIcon.jpg';

const styles = (theme: Theme): StyleRules => createStyles({
    imageGrid: {
        textAlign: 'center'
    },
    image: {
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '60%'
        }
    },
    heading: {
        padding: '10px 0'
    }
});

const About: FC<WithStyles<typeof styles>> = ({ classes }) => (
    <div>
        <Grid container direction="row-reverse">
            <Grid sm={12} md={6} className={classes.imageGrid}>
                <img src={myIcon} alt="自分のツイッターアイコン" className={classes.image} />
            </Grid>
            <Grid sm={12} md={6}>
                <Typography variant="h2" className={classes.heading}>経歴</Typography>
                <ul>
                    <li>1989年生まれ（29歳） 東京在住</li>
                    <li>大阪市公務員（半年）</li>
                    <li>Webライター（半年）</li>
                    <li>アフィリエイター（1年半）</li>
                    <li>Webエンジニア（2018年11月〜）</li>
                </ul>
                <Typography variant="h2" className={classes.heading}>技術</Typography>
                <ul>
                    <li>Laravel（PHP）</li>
                    <li>jQuery</li>
                    <li>Vue.js Nuxt.js</li>
                    <li>React.js</li>
                    <li>Wordpress</li>
                    <li>AWS Docker</li>
                    <li>Webpackなどのフロントエンド周辺技術</li>
                </ul>
            </Grid>
        </Grid>
    </div>
);

export default withStyles(styles)(About);