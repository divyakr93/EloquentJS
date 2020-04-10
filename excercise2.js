//excercise 2
let txt = "'I'm a programmer,' he said, 'it's good for me.'";

console.log(txt.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));
