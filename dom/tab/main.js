'use strict';

const tabLabels = document.querySelectorAll('.tab__label li a');
const tabContents = document.querySelectorAll('.tab__content');

tabLabels.forEach( clickedLabel => {
  clickedLabel.addEventListener('click', e => {
    // aタグの初期設定をリセット
    e.preventDefault();

    tabLabels.forEach( label => {
      label.classList.remove('active');
    });

    clickedLabel.classList.add('active');

    tabContents.forEach( content => {
      content.classList.remove('active');
    });

    // clickedLabel.dataset.*** 選択されたもののdataset-***
    document.getElementById(clickedLabel.dataset.id).classList.add('active');
  
  });
});

// ブロックスコープ
// 全体に{}をつけるとローカルとして利用できる