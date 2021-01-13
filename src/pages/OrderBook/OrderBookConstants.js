import keyMirror from "key-mirror-nested";

export const TRADING_PAIRS = {
  "BTC/USDT": { key: "BTC/USDT", value: "btcusdt" },
  "ETH/BTC": { key: "ETH/BTC", value: "ethbtc" },
};

export const ORDER_BOOK_TEST_IDS = keyMirror({
  TRADING_PAIRS_SELECT: null,
  TABLE_HEADERS: null,
  BIDS: null,
  ASKS: null,
});
