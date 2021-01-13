import React, { useEffect, useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { map } from "lodash/fp";
import { styled, Select, InputLabel, MenuItem, Grid } from "@material-ui/core";
import { ReactComponent as NexoLogo } from "../../assets/nexo-io-vector-logo.svg";
import { ORDER_BOOK_TEST_IDS, TRADING_PAIRS } from "./OrderBookConstants";
import { subscribe, unsubscribe } from "./OrderBookService";
import DataWidget from "./components/DataWidget";

let ws = new W3CWebSocket(`wss://stream.binance.com:9443/ws`);

const Container = styled(Grid)({
  flexDirection: "column",
  textAlign: "center",
});

const Logo = styled(NexoLogo)({
  width: "200px",
  height: "auto",
});

const GridHeader = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 700,
}));

const OrderBook = () => {
  const [currentStream, setCurrentStream] = useState("btcusdt");
  const [bids, setBids] = useState([]);
  const [asks, setAsks] = useState([]);

  useEffect(() => {
    ws.onopen = () => {
      subscribe({ ws, stream: currentStream });
    };
    ws.onmessage = ({ data }) => {
      const information = JSON.parse(data);
      setBids(information.bids);
      setAsks(information.asks);
    };
  }, []);

  const subscribeToStream = (event) => {
    const newStream = event.target.value;
    unsubscribe({ ws, currentStream });
    subscribe({ ws, stream: newStream });
    setCurrentStream(newStream);
  };

  return (
    <Container container spacing={3}>
      <Grid item xs={12}>
        <Logo />
      </Grid>
      <Grid item xs={12} data-testid={ORDER_BOOK_TEST_IDS.TRADING_PAIRS_SELECT}>
        <InputLabel id="select-trading-pair">Trading Pair</InputLabel>
        <Select
          labelId="select-trading-pair"
          value={currentStream}
          onChange={subscribeToStream}
          placeholder="Choose a trading pair"
        >
          {map(
            ({ key, value }) => (
              <MenuItem key={key} value={value}>
                {key}
              </MenuItem>
            ),
            TRADING_PAIRS
          )}
        </Select>
      </Grid>
      <Grid container data-testid={ORDER_BOOK_TEST_IDS.TABLE_HEADERS}>
        <GridHeader item xs={6}>
          Bids
        </GridHeader>
        <GridHeader item xs={6}>
          Asks
        </GridHeader>
      </Grid>
      <Grid container>
        <DataWidget
          data={bids}
          currentStream={currentStream}
          data-testid={ORDER_BOOK_TEST_IDS.BIDS}
        />
        <DataWidget
          data={asks}
          currentStream={currentStream}
          data-testid={ORDER_BOOK_TEST_IDS.ASKS}
        />
      </Grid>
    </Container>
  );
};

export default OrderBook;
