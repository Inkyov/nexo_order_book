export function subscribe ({ws, stream}) {
  return ws.send(JSON.stringify(
    {
      'method': 'SUBSCRIBE',
      'params':
        [
          `${stream}@depth20@1000ms`
        ],
      'id': 1
    }))
}

export const unsubscribe = ({ws, currentStream}) =>
  ws.send(JSON.stringify(
    {
      'method': 'UNSUBSCRIBE',
      'params':
        [
          `${currentStream}@depth20@1000ms`
        ],
      'id': 1
    }))
