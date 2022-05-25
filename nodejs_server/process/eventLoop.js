const bar = () => console.log('bar');
const baz = () => console.log('baz');
const fo = () => {
  console.log('foo');
  bar();
  baz();
}
fo();
/* 
foo()
console.log('foo')
bar()
console.log('bar')
baz()
console.log('baz');
*/

const foo = () => {
  console.log('foo');
  setTimeout(bar, 0);
  baz();
}
foo();
/* 
foo()
console.log('foo')
setTimeout()
baz()
console.log('baz')
bar()
console.log('bar')
*/

const foO = () => {
  console.log('foo');
  setTimeout(bar, 0);
  new Promise((resolve, reject) => resolve('should be right after baz, before bar')).then(resolve => console.log(resolve));
  process.nextTick(() => {
    console.log('position');
  })
  baz();
}
foO();