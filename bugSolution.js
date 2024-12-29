function foo(a,b){
  a = parseInt(a, 10);
  b = parseInt(b, 10);
  if(isNaN(a) || isNaN(b)){
    return 0; // Handle non-numeric input
  }
  return a+b;
}
let x = foo(2,3);
console.log(x);
let y = foo("2", 3);
console.log(y);
let z = foo("abc",3);
console.log(z); 