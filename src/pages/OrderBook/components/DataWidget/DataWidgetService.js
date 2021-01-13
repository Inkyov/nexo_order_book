export const formatPrice = ({currentStream, value}) =>
  currentStream === 'btcusdt' ? parseFloat(value).toFixed(2) : parseFloat(value).toFixed(6)

export const formatAmount = ({currentStream, value}) =>
  currentStream === 'btcusdt' ? parseFloat(value).toFixed(6) : parseFloat(value).toFixed(3)
