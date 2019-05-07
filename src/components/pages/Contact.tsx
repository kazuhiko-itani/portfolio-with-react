import React, { FC } from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';

const styles = (theme: Theme): StyleRules => createStyles({
    heading: {
        padding: '10px 0'
    },
    form: {
        width: '100%',
        marginTop: 20
    },
    input: {
        marginTop: 10
    }
});

const Contact: FC<WithStyles<typeof styles>> = ({ classes }) => (
    <div>
        <div>
            <Typography variant="h2" className={classes.heading}>お問い合わせ</Typography>
            <p>
                ご連絡はTwitter(
                <a href="https://twitter.com/akashi__akashi" target="_blank" rel="noopener noreferrer">@akashi__akashi</a>
                )のDM、または以下のフォームからお願いいたします。
            </p>
        </div>
        <div>
            <FormControl className={classes.form}>
                <div>
                    <FormLabel required={true}>お名前</FormLabel>
                    <TextField placeholder="your name" fullWidth={true} className={classes.input}></TextField>
                </div>
            </FormControl>
        </div>
    </div>
);

export default withStyles(styles)(Contact);