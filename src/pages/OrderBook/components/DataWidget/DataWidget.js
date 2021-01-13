import React from 'react'
import { isEmpty } from 'lodash/fp'
import { Grid, styled } from '@material-ui/core'
import { formatAmount, formatPrice } from './DataWidgetService'
import { STREAM_LABELS } from '../../OrderBookConstants'

const GridItem = styled(Grid)(({theme}) => ({
  flex: 1,
  marginBottom: theme.spacing(1)
}))

const DataWidget = ({data, currentStream}) => {
  const labels = STREAM_LABELS[currentStream]

  return (
    <Grid item xs={6}>
      <Grid container>
        <GridItem item xs={6}>Price({labels.price})</GridItem>
        <GridItem item xs={6}>Amount({labels.amount})</GridItem>
      </Grid>
      {!isEmpty(data) && (
        data.map((entry, index) =>
          <Grid container key={index}>
            <Grid item xs={6}>{formatPrice({currentStream, value: entry[0]})}</Grid>
            <Grid item xs={6}>{formatAmount({currentStream, value: entry[1]})}</Grid>
          </Grid>
        )
      )}
    </Grid>
  )
}

export default DataWidget
