import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {OrderBook} from "./modules/OrderBook/OrderBook";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        marginTop: 50
    },
});

export default function App() {
    const classes = useStyles();

    return (
        <>
            <CssBaseline/>
            <Container className={classes.container}>
                <OrderBook/>
            </Container>
        </>
    );
}
