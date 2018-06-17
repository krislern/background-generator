const first = () => {
  const great = 'Hi';
  const second = () => {
    alert(greet);
  }
  return second;
}

const newFunc = first();
newFunc();

//Closures - a function ran, the fuunction execute, ites never going to execute againe
//But its going to remember that there are references to those variable
// so the chile scope alwats has access to the parent scope

//Currying
const multiply = (a,b) => a+b;
const curriedMultiply = (a) => (b) => a + b;
curriedMultiply(3)(4);
const multiplyBy5 = curriedMultiply(5);

//Compose
const compose = (f,g) => (a) => f(g(a));
