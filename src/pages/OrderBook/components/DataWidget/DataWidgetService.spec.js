import * as DataWidgetService from "./DataWidgetService";

describe("formatPrice", () => {
  it("should return 2 decimals after the floating point for BTC/USDT pair", () => {
    const actual = DataWidgetService.formatPrice({
      currentStream: "btcusdt",
      value: "12345.1234567",
    });
    expect(actual).toBe("12345.12");
  });

  it("should return 6 decimals after the floating point for ETH/BTC pair", () => {
    const actual = DataWidgetService.formatPrice({
      currentStream: "ethbtc",
      value: "0.11111111",
    });
    expect(actual).toBe("0.111111");
  });
});

describe("formatAmount", () => {
  it("should return 6 decimals after the floating point for BTC/USDT pair", () => {
    const actual = DataWidgetService.formatAmount({
      currentStream: "btcusdt",
      value: "0.123456789",
    });
    expect(actual).toBe("0.123457");
  });

  it("should return 3 decimals after the floating point for ETH/BTC pair", () => {
    const actual = DataWidgetService.formatAmount({
      currentStream: "ethbtc",
      value: "0.12345678",
    });
    expect(actual).toBe("0.123");
  });
});
