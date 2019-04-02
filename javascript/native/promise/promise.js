/*
* 参考
* 实现一个完美符合Promise/A+规范的Promise
* https://github.com/forthealllight/blog/issues/4
* */

function MyPromise(fn) {
  let self = this;
  self.status = 'pending';
  self.value = undefined;
  self.reason = undefined;
  function resolve(value) {
    if(self.status === 'pending') {
      self.value = value;
      self.status = 'resolved';
    }
  }
  function reject(reason) {
    if(self.status === 'pending') {
      self.reason = reason;
      self.status = 'rejected';
    }
  }

  try {
    fn(resolve, reject);
  } catch (e) {
    console.error(e)
  }
}

MyPromise.prototype.then = function (onFullFiled, onRejected) {
  let self = this;
  if(self.status === 'resolved') {
    onFullFiled(self.value);
  } else if(self.status === 'rejected') {
    onRejected(self.reason);
  }
};
