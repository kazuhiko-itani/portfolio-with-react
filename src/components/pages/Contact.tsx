import React, { FC } from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = (theme: Theme): StyleRules => createStyles({
    heading: {
        padding: '10px 0'
    },
    formBox: {
        marginTop: 60
    },
    form: {
        width: '100%',
        marginBottom: 60
    },
    input: {
        marginTop: 10
    },
    buttonArea: {
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            marginBottom: 30,
        }
    },
    button: {
        color: theme.palette.primary.dark,
        width: '20%',
        [theme.breakpoints.down('sm')]: {
            padding: '10px 0',
            width: '50%'
        }
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
        <div className={classes.formBox}>
            <FormControl className={classes.form}>
                <FormLabel required={true}>お名前</FormLabel>
                <Input placeholder="your name" fullWidth={true} className={classes.input} />
            </FormControl>
            <FormControl className={classes.form}>
                <FormLabel required={true}>メールアドレス</FormLabel>
                <Input placeholder="example@gmail.com" fullWidth={true} className={classes.input} />
            </FormControl>
            <FormControl className={classes.form}>
                <FormLabel required={true}>メッセージ内容</FormLabel>
                <TextField fullWidth={true} className={classes.input} multiline rows={4} variant='outlined'></TextField>
            </FormControl>
        </div>
        <div className={classes.buttonArea}>
            <Button variant="outlined" className={classes.button}>送信する</Button>
        </div>
    </div>
);

export default withStyles(styles)(Contact);