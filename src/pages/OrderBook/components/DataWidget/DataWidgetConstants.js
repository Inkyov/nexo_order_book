import keyMirror from "key-mirror-nested";

export const STREAM_LABELS = {
  btcusdt: { price: "USDT", amount: "BTC" },
  ethbtc: { price: "BTC", amount: "ETH" },
};

export const COMPONENT_TEST_IDS = keyMirror({
  PRICE: null,
  AMOUNT: null,
  ORDER_ROW: null,
});
