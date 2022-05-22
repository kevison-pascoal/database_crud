const x = 1;
const y = 2;
const z = 3;

console.count(
 'The value of x is '+ x + 
 ' and has been checked .. how many times?'
);
console.count(
  'The value of x is '+ x + 
  ' and has been checked .. how many times?'
);
console.count(
  'The value of x is '+ x + 
  ' and has been checked .. how many times?'
);

const oranges = ['orange', 'orange'];
const apples = ['just one apple'];
oranges.forEach(fruit => {
  console.count(fruit);
});
apples.forEach(fruit => {
  console.count(fruit);
});

console.countReset('orange');

oranges.forEach(fruit => {
  console.count(fruit);
});
//console.trace()

const doSomething = () => console.log('init');
const measureDoingSomething = () => {
  console.time('doSomething()');
  // do something, and meadure the time it takes
  doSomething();
  console.timeEnd('doSomething()');
}
measureDoingSomething();
console.log('\x1b[33m%s\x1b[0m', 'hi!');

