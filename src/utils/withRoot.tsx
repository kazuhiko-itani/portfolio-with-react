import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
    palette: {
        primary: grey,
        secondary: blueGrey,
    },
    typography: {
        useNextVariants: true,
        h3: {
            fontSize: 28,
            color: '#616161'
        }
    },
    'breakpoints': {
        'keys': [
            'xs',
            'sm',
            'md',
            'lg',
            'xl'
        ],
        'values': {
            'xs': 360,
            'sm': 768,
            'md': 992,
            'lg': 1200,
            'xl': 1800
        }
    }
});

function withRoot<P>(Component: React.ComponentType<P>) {
    function WithRoot(props: P) {
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...props} />
            </MuiThemeProvider>
        );
    }

    return WithRoot;
}

export default withRoot;