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
    submitArea: {
        position: 'relative'
    },
    submitSuccess: {
        color: 'green',
        fontSize: 14,
        textAlign: 'center',
    },
    submitError: {
        color: 'red',
        fontSize: 14,
        textAlign: 'center',
    },
    buttonArea: {
        textAlign: 'center',
        marginTop: 10,
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
    },
});

interface Props {
    resStatus: '' | 'success' | 'error' | 'validate';
    nameInput: (input: string) => void;
    emailInput: (input: string) => void;
    messageInput: (input: string) => void;
    postFormDataStart: () => void;
};

type PropsWithStyle = Props & WithStyles<typeof styles>;

const Contact: FC<PropsWithStyle> =
    ({ classes,
       resStatus,
       nameInput,
       emailInput,
       messageInput,
       postFormDataStart
    }) => (
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
                <Input
                    placeholder="your name"
                    fullWidth={true}
                    className={classes.input}
                    onChange={e => nameInput(e.target.value)} />
            </FormControl>
            <FormControl className={classes.form}>
                <FormLabel required={true}>メールアドレス</FormLabel>
                <Input
                    placeholder="example@gmail.com"
                    fullWidth={true}
                    className={classes.input}
                    onChange={e => emailInput(e.target.value)} />
            </FormControl>
            <FormControl className={classes.form}>
                <FormLabel required={true}>メッセージ内容</FormLabel>
                <TextField
                    fullWidth={true}
                    className={classes.input}
                    multiline rows={4}
                    variant='outlined'
                    onChange={e => messageInput(e.target.value)}></TextField>
            </FormControl>
        </div>
        <div className={classes.submitArea}>
            {resStatus === '' ? '' : resStatus === 'success' ? (
                <div className={classes.submitSuccess}>
                    <span>データを送信しました。確認後、お返事いたします。</span>
                </div>
            ) : resStatus === 'error' ? (
                <div className={classes.submitError}>
                    <span>送信に失敗しました。全てのフォームに内容が入力されているかご確認ください。</span>
                </div>
            ) : (
                <div className={classes.submitError}>
                    <span>未入力の項目があります。</span>
                </div>
            )}
            <div className={classes.buttonArea}>
                <Button variant="outlined" className={classes.button} onClick={() => postFormDataStart()}>送信する</Button>
            </div>
        </div>
    </div>
);

export default withStyles(styles)(Contact);