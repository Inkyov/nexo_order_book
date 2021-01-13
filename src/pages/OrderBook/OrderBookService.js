export function subscribe({ ws, stream }) {
  return ws.send(
    JSON.stringify({
      method: "SUBSCRIBE",
      params: [`${stream}@depth20@1000ms`],
      id: 1,
    })
  );
}

export function unsubscribe({ ws, currentStream }) {
  return ws.send(
    JSON.stringify({
      method: "UNSUBSCRIBE",
      params: [`${currentStream}@depth20@1000ms`],
      id: 1,
    })
  );
}
