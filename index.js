// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


// 何かの条件にマッチしたデータのみ取り出したいときに使う

// const obj = {
//   "hoge": {text: "fuga"},
//   "foo": {text: "bar"},
//   "fiz": {text: "buzz"}
// };

// const objectArray = Object.keys(obj).map(key => {
//   const value = obj[key]
//   value['id'] = key
//   // console.log(value);
//   return value
// });

// console.log(objectArray);




const objectArray = [
  { id: "hoge", text: "fuga" },
  { id: "foo", text: "bar" },
  { id: "fiz", text: "buzz" },
];

const result = objectArray.filter(object => {
return object.id === "hoge"
})

console.log(result[0].text)