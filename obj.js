// Objectオブジェクト
// objectの作成
// const test = new Object();

//簡単な書き方
const test = {
  test1:10,
  test2:20,
  test3:30
}; 
// Objectオブジェクトの場合はObject.メソッド(定数・変数)
console.log(Object.values(test));

for( value of Object.values(test)){
  console.log(value);
};

// 組み込み関数

// 郵便番号チェック
// ハイフン削除
// 7文字かどうか
const postalCode = '123-4567';

const postal = {

  postalCode: '123-4567',
  // 関数の中でオブジェクトの中の値を利用したい場合にthisを使う
  
  // this.postalCode
  // objectの中に関数を作る書き方2種類
  // checkPostalCode: function(){}
  checkPostalCode(){
    // メソッドチェーン
    const replaced = this.postalCode.replace('-','').length;
    // const length = replaced.length;
  
    if (replaced === 7){
      return true;
    }
    return false;
  }
};
// 関数の命名について
// JSはcamelCase
// HTML/CSSは大文字と小文字を区別しないのでsnake_case
// 英語 動詞+名詞

console.log(postal.checkPostalCode());

const person = {
  name: '本田',
  age: 30,

  getName() {
    console.log(this.name);
    return this;
  },

  getAge(){
    console.log(this.age);
    return this;
  }
};

person.getName().getAge();