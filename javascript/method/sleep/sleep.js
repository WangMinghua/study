



function sleep_1(interval = 1000) {
  return new Promise(resolve => {
    setTimeout(resolve, interval);
  });
}

function sleep_2(fn, interval = 1000) {
  if(typeof fn === "function") {
    setTimeout(fn, interval);
  }
}
