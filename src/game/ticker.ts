// 帧循环 ticker
let startTime = Date.now();
function handleFrame() {
    tickers.forEach((ticker) => ticker(Date.now() - startTime));
    requestAnimationFrame(handleFrame);
}

startTime = Date.now();

requestAnimationFrame(handleFrame);

type Ticker = Function;
const tickers: Ticker[] = [];
export function addTicker(ticker: Ticker) {
    tickers.push(ticker);
}
