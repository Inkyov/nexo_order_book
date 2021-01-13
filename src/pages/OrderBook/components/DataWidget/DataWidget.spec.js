import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import DataWidget from "./DataWidget";
import { COMPONENT_TEST_IDS } from "./DataWidgetConstants";

const defaultProps = {
  data: [
    ["0.33333", "0.12345"],
    ["0.222222", "0.12345"],
  ],
  currentStream: "btcusdt",
};

const renderComponent = (props) =>
  render(<DataWidget {...{ ...defaultProps, ...props }} />);

describe("DataWidget", () => {
  beforeEach(cleanup);

  it("should render", () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });

  it("should render price label", () => {
    const { getByTestId } = renderComponent();
    const priceLabel = getByTestId(COMPONENT_TEST_IDS.PRICE);
    expect(priceLabel).toBeVisible();
  });

  it("should render amount label", () => {
    const { getByTestId } = renderComponent();
    const amountLabel = getByTestId(COMPONENT_TEST_IDS.AMOUNT);
    expect(amountLabel).toBeVisible();
  });

  it("should render rows", () => {
    const { getByTestId } = renderComponent();

    const orderRow = getByTestId(`${COMPONENT_TEST_IDS.ORDER_ROW}_0`);
    expect(orderRow).toBeVisible();
  });
});
