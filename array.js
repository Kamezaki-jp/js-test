// 配列の作成
// const fruits = new Array();
// シンタックスシュガー(かんたんに書くやり方)
const fruits = [
  'りんご','バナナ'
];

console.log(fruits);

// push 配列の末尾に要素を追加
fruits.push('みかん');
fruits.push('メロン');
fruits.push('ぶどう');

console.log(fruits);

// コールバック関数
// 関数のインプットのところに関数が入ること
// 関数の中に関数が入る
fruits.forEach(function(input){
  console.log(input);
});

// 一般的な関数の作り方
// function getItem(){}

// コールバック関数 名前がない関数(無名関数・匿名関数)

// ES6 アロー関数
// const 関数名 = (引数) => {処理 戻り値};

// 引数が1個なら()も不要(0個なら省略不可)
// const test = test => test;

// 処理が1行なら{}も不要 returnも省略
// const tax = (price, tax) => price * tax;

// 関数の名前あり
// const getItem = () => {console.log('アロー')};
const getItem = () => console.log('アロー');
getItem();

// 関数の名前なし
// before

// fruits.forEach(function(input){
//   console.log(input);
// });

// after
fruits.forEach(input => console.log(input));

// Array.filter(配列に新しい条件を付けて配列を作る)
// let newArray = arr.filter(callback(element[, index[, array]])[, thisArg])

// callback配列の各要素に対して実行するテスト関数。
// この関数がTrueを返した要素は残され、falseを返した要素は取り除かれます。
// この関数には3つの引数が与えられます。

// element 配列内の現在の要素
// index 配列内の現在の要素の添字
// array filterメソッドを実行している配列
// thisArg callbackを実行するときにthisとして使う値

const scores = [10,20,30,40];
// 30以上の値を取り出す
const newScores = scores.filter(value => {
  return value >= 30;
});
// シンタックスシュガー
// const newScores = scores.filter((value) => value >= 30);

console.log(newScores);

// Array.find
const members = ['本田','香川','長友'];

const member = members.find(value => value === '長友');

console.log(member);

// Array.map 配列を元に新しい配列を作る

const userList = [10,20,30,40];
// テンプレート文字列 `${}` バッククォート
const userIdList = userList.map(value => `user_${value}`);

console.log(userIdList);
console.table(userIdList);