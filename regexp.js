let text = "'After the sunset,' he said. 'We'll have to go home.'";
const regexp1 = /\B\'/g;
let newText = text.replace(regexp1, '\"');
console.log(newText);

