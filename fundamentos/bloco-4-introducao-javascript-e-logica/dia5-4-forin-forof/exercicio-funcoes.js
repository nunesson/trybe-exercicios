function soma(num) {
  let total = 0;
  for(let soma=0; soma < num.length; soma += 1){
    total += num[soma];
  }
  return total;
}

console.log(soma(8));