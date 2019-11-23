import React, {useState} from 'react';
import {useBinanceOrderBook} from "../../shared/hooks/useBinanceOrderBook";
import {Grid} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import OrdersList from "./OrdersList";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {PAIRS_LIST} from '../../shared/constants/binance';

const useStyles = makeStyles({
    title: {
        fontSize: 25,
    },
});

export function OrderBook() {

    const classes = useStyles();
    const [pair, setPair] = useState('btcusdt');
    const {isLoading, message} = useBinanceOrderBook(pair);

    const handleChangePair = event => {
        setPair(event.target.value);
    };
    return (
        <>
            <Grid container spacing={3}>
                <Grid item>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Order Book
                    </Typography>
                </Grid>
                <Grid item>
                    <FormControl>
                        <Select
                            value={pair}
                            onChange={handleChangePair}
                        >
                            {Object.keys(PAIRS_LIST).map(code => {
                                const name = PAIRS_LIST[code];
                                return <MenuItem value={code} key={code}>{name}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>


            {isLoading
                ? (<p>loading ...</p>)
                : (
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <OrdersList title="Buy Order" items={message.bids}/>
                        </Grid>
                        <Grid item xs={6}>
                            <OrdersList title="Sell Order" items={message.asks}/>
                        </Grid>
                    </Grid>
                )
            }
        </>
    )
}
