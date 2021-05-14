// object作成
const myMap = new Map();

// setで値の設定
myMap.set('id',3);
myMap.set('name','本田');
myMap.set('hobby','サッカー');
// 連想配列として表示
console.log(myMap);
// keyでvalueを取得
console.log(myMap.get('name'));

// for文との相性○
const valueList = myMap.values();

for ( value of valueList ){
  console.log(value);
}