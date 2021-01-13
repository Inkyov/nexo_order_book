import React from "react";
import { isEmpty } from "lodash/fp";
import { Grid, styled } from "@material-ui/core";
import PropTypes from "prop-types";
import { formatAmount, formatPrice } from "./DataWidgetService";
import { STREAM_LABELS, COMPONENT_TEST_IDS } from "./DataWidgetConstants";

const GridItem = styled(Grid)(({ theme }) => ({
  flex: 1,
  marginBottom: theme.spacing(1),
}));

const DataWidget = ({ data, currentStream, ...props }) => {
  const labels = STREAM_LABELS[currentStream];

  return (
    <Grid item xs={6} {...props}>
      <Grid container>
        <GridItem item xs={6} data-testid={COMPONENT_TEST_IDS.PRICE}>
          Price({labels.price})
        </GridItem>
        <GridItem item xs={6} data-testid={COMPONENT_TEST_IDS.AMOUNT}>
          Amount({labels.amount})
        </GridItem>
      </Grid>
      {!isEmpty(data) &&
        data.map((entry, index) => (
          <Grid
            container
            key={index}
            data-testid={`${COMPONENT_TEST_IDS.ORDER_ROW}_${index}`}
          >
            <Grid item xs={6}>
              {formatPrice({ currentStream, value: entry[0] })}
            </Grid>
            <Grid item xs={6}>
              {formatAmount({ currentStream, value: entry[1] })}
            </Grid>
          </Grid>
        ))}
    </Grid>
  );
};

DataWidget.propTypes = {
  data: PropTypes.array,
  currentStream: PropTypes.string.isRequired,
};

export default DataWidget;
