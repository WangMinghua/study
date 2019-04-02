/*
* 防抖解释：
* 当一次事件发生后，事件处理器要等一定阈值的时间，
* 如果这段时间过去后 再也没有 事件发生，就处理最后一次发生的事件。
* 假设还差 0.01 秒就到达指定时间，
* 这时又来了一个事件，
* 那么之前的等待作废，需要重新再等待指定时间。
*
* */

function debounce(fn, interval = 1000) {
  let timer = null;
  return function() {
    if(timer) {
      clearTimeout(timer);
      timer = null;
    }
    console.log('args', arguments)
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, interval);
  }
}
