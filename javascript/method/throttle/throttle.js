/*
* 节流解释：
* 可以理解为事件在一个管道中传输，加上这个节流阀以后，事件的流速就会减慢。
* 一定时间内，函数只执行一次
* */

function throttle(fn, interval = 1000) {
  let lastTime = new Date().getTime();
  return function () {
    let nowTime = new Date().getTime();
    if(nowTime - lastTime > interval) {
      fn.apply(this, arguments);
      lastTime = new Date().getTime();
    }
  }
}
