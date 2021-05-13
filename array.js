// 配列の作成
// const fruits = new Array();
// シンタックスシュガー(かんたんに書くやり方)
const fruits = [
  'りんご','バナナ'
];

console.log(fruits);

// push 配列の末尾に要素を追加
fruits.push('みかん');

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