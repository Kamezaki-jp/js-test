// const formTest1 = document.getElementById('form_test1');
// console.log(formTest1);


// 複数のformの値をHTMLCollectionとして配列を返す
// const formTest1 = document.forms;
// console.log(formTest1);

// form毎に扱う方法
// forms.id or name.id or value
const formTest1 = document.forms.form_test1;
console.log(formTest1);

const formTestYourName = document.forms.form_test1.your_name;
console.log(formTestYourName);

formTestYourName.addEventListener('input', () => {
  let yourNameValue = document.getElementById('your_name_value');
  yourNameValue.textContent = formTestYourName.value.length;
});

// inputタグの作成
// const input = createElement('input');
// input.value = 'aaa';
// input.name = 'your_name';
// input.type = 'text';

// ファイルアップロード

// プレビュー位置の取得
const preview = document.forms.form_test1.preview;

document.forms.form_test1.image_file.addEventListener('change', e => {
  console.log(e.target.files[0]);
  const uploadFile = e.target.files[0];
  
  // 画像を表示させる FileReader
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    preview.src = reader.result; //Base64
  });
  reader.readAsDataURL(uploadFile);
  
});