import React, { FC } from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {worksData, portfolioData} from '../../data/portfolioData';

const styles = (theme: Theme): StyleRules => createStyles({
    heading: {
        padding: '10px 0'
    },
    cardHeading: {
        padding: '10px 0 20px',
        fontWeight: 'bold',
        lineHeight: 1.4,
    },
    cardList: {
        paddingLeft: 0
    },
    card: {
        marginBottom: 20
    },
    cardContent: {
        padding: '20px 20px'
    },
    image: {
        width: '100%',
    },
    icon: {
        fontSize: 24,
        marginRight: 10,
        verticalAlign: 'middle'
    },
    workDetail: {
        [theme.breakpoints.down('sm')]: {
            lineHeight: '1.6'
        }
    }
});

const Works: FC<WithStyles<typeof styles>> = ({ classes }) => (
    <section>
        <div>
            <Typography variant="h2" className={classes.heading}>担当した業務</Typography>
            <Grid container>
                {worksData.map((data, index) => (
                    <ul key={index} className={classes.cardList}>
                        <Grid sm={12} item>
                            <Card className={classes.card}>
                                <CardContent className={classes.cardContent}>
                                    <Typography variant="h3" className={classes.cardHeading}>{data.title}</Typography>
                                    <p>期間: {data.period}</p>
                                    <p className={classes.workDetail}> {data.text}</p>
                                </CardContent>
                            </Card>
                        </Grid>
                    </ul>
                ))}
            </Grid>
        </div>
        <div>
            <Typography variant="h2" className={classes.heading}>自主制作</Typography>
            <Grid container>
                {portfolioData.map((data, index) => (
                    <ul key={index} className={classes.cardList}>
                        <Grid sm={12} item>
                            <Card className={classes.card}>
                                <CardContent className={classes.cardContent}>
                                    <Typography variant="h3" className={classes.cardHeading}>{data.title}</Typography>
                                    <Grid container spacing={16}>
                                        <Grid sm={12} md={6} item>
                                            <a href={data.url} target="_blank" rel="noopener noreferrer">
                                                <img src={data.img} className={classes.image} alt={data.title}/>
                                            </a>
                                        </Grid>
                                        <Grid sm={12} md={6} item>
                                            <p>制作年: {data.year}</p>
                                            <p className={classes.workDetail}>{data.text}</p>
                                            <a href={data.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FontAwesomeIcon icon={['fab', 'github']} className={classes.icon} />
                                                githubページ
                                            </a>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </ul>
                ))}
            </Grid>
        </div>
    </section>
);

export default withStyles(styles)(Works);