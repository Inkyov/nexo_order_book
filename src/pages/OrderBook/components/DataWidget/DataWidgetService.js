export const formatPrice = ({ currentStream, value }) =>
  parseFloat(value).toFixed(currentStream === "btcusdt" ? 2 : 6);

export const formatAmount = ({ currentStream, value }) =>
  parseFloat(value).toFixed(currentStream === "btcusdt" ? 6 : 3);
