let count = 0;
setTimeout(() => {
  console.log('after');
}, 0);
console.log('before');

const id = setInterval(() => {
  console.log('write %d', count);
  if(count == 100) {
    clearInterval(id);
    console.log('Clear Interval Executed!');
  }
  count++;
  // otherwise do things
}, 10);
const myFunction = () => {
  setTimeout(myFunction, 10);
  console.log('milliseconds timers');
};
setTimeout(myFunction, 10);