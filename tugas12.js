var shiftPop = () => {
  fruit = ['pisang', 'jeruk', 'apel', 'mangga'];
  console.log(fruit);
  fruit2 = fruit.pop();
  console.log(fruit);
  fruit3 = fruit.shift();
  return fruit
}
console.log(shiftPop());