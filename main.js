// 配列
// const array = [1,2,3];
// const array_2 = [
//   ["赤", "青", "黄"],
//   ["緑","紫","黒"]
// ];
// console.log(array_2[0][2]);

// const member = {
//   'name': 'ホンダ',
//   'height': '170'
// };

// console.log(member.height);

// 連想配列
// const member_2 = {
//   '本田':{
//     'height':170,
//     'hobby':'サッカー'
//   },
//   'kagawa':{
//     'height':165,
//     'hobby':'サッカー'
//   },
// };

// console.log(member_2.kagawa.hobby)

// const member_3 = {
//   '1組':{
//     '本田':{
//       'height':170,
//       'hobby':'サッカー'
//     },
//     '香川':{
//       'height':165,
//       'hobby':'サッカー'
//     }
//   },
//   '2組':{

//   }
// };

// console.log(member_3["1組"]["本田"]["height"])

// 演算子
// const test_1 = 4;
// let test_2 = 3;

// test_2 += 3;

// const test_3 = test_1 + test_2;

// console.log(test_3);


// 条件文
// const height = 90;

// == 一致
// === 型も一致
// if(height === 90){
//   console.log('身長は' + height + 'cmです');
// }else{
//   console.log('身長は90cmではありません');
// }

// 三項演算子
// 条件 ? 真：偽
// const score = 80;
// const comment = score > 80 ? 'good' : 'not good';

// console.log(comment);

// 繰り返し処理
// const scores = [10, 20, 30];
// one of them 一つのうちの
// for ( score of scores ){
//   console.log(score);
// }

//  for(初期値;繰り返し条件;増減 ++ --)
// for(let i = 0; i <= 10; i++){
//   console.log(i);
// }



// インプット引数なし
// アウトプット戻り値あり

// function getNumberOfComment(){
//   return 5;
// }

// console.log(getNumberOfComment());

// インプット引数が２つ
// アウトプット戻り値あり
// function sumPrice(int1, int2){
//   let int3 = int1 + int2;
//   return int3;
// }

// const total = sumPrice(3,5);
// console.log(total);

// 文字の置き換え
const test_3 = "テストです";

console.log(test_3.replace("テスト","ファイト"));