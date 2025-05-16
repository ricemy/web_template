// カンペー
// <script src="./script.js" defer></script>
// @charset "UTF-8";

//////////////////// スライドへ

// 文字列
console.log("1 + 1");
// 数値
console.log(1 + 1);

// 四則演算
console.log(13 % 3);

/////////////////// スライドへ

// Q.1 何が出力される?
console.log("45 % 7");
console.log(2 * 5 + "2");



// 変数と宣言
let name1 = "John";
console.log(name1);
name1 = "Tommy"; // 再代入可能
console.log(name1);

/////////////////// スライドへ

// 定数
const name2 = "Kate";
name2 = "Tommy";
console.log(name2); //再代入不可

// Q.2 何が出力される?
let p = "1";
p = 4;
let q = 2;
console.log(p + q);



// 配列
const array = ["いち", "にー", "さん", name1, name2]; // 配列番号は0から
console.log(array[0]); // いち
console.log(array[3]); // Tommy
console.log(name1); // John



// 条件文
let state = true;
if (state === true) {
  state = false;
} else {
  console("まちがっている");
}
console.log(state);
// if( 条件 ) { 条件下での処理
// }else{ そうでないときの処理 }
// ===: 一致, !==: 不一致


// ループ文: 回数指定
// for (初期条件, 条件式, 操作) { 条件下での処理 }
for (let i = 0; i < 9; i++) {
  console.log(i);
}

// Q.3 i(i=0-10)が3で割り切れるなら"3の倍数です",それ以外なら"3の倍数ではない"と出力
for (let i = 0; i < 10; i++){
  if (i % 3 === 0) {
    console.log("3の倍数です");
  }else{
    console.log("3の倍数ではない");
  }
}


// while(条件文){ 繰り返し処理 }: 条件が満たされるまで
let countUp = 10 // 初期地はwhileの外に書く
while(countUp % 3 === 1) { // 10未満の時処理をくり返す
  countUp--; // 1プラス
}

// do{ 繰り返し処理ただし初動は必ず実行される }while(条件文)
let countDown = 10
do{
  countDown--;
}while( countDown % 3 == 0 );

// continue: 以降の処理がされず、次のループに移る
let skipper = 0;
while(skipper < 10) {
  skipper++;

  if (skipper % 2 === 0) continue;
  console.log(skipper);
}
// break: 全ループ終了
let end = 1
while(end < 20) {
  end ++;
  if(end % 5 === 0) break;
  console.log(end);
}


// 自由記述

// switch: 分岐
let num = 1;
while (num < 10) { 
  num++;
  switch (true) { // trueに関する分岐
    case num % 2 === 0: // trueの場合
      console.log("偶数");
      break;
    default: //falseの場合
      console.log("奇数");
      break;
  }
}


// 関数
function greeting() {
  // functionで関数の宣言
  console.log("hello");
};
greeting(); // 関数の呼び出し

// アロー関数
const claim = (hobby) => {
  console.log("趣味は" + hobby + "です。"); // "+"で文字列と数値の合体
};
claim("ゲーム");
// const 関数名 = (引数) => { 処理 };または
// function 関数名 (引数) {処理};
// xの関数f(x)のように、引数の関数function(引数)のように扱う。
// 関数名(引数の代入値);で呼び出し

// maxに代入した値まで足し続ける関数
function plus(max) {
  for (i = 0; i <= max; i++) {
    console.log(i);
  }
}
plus(10);

// Q.4 nameを配列に追加する関数
nameList = [];
let i = 0;
function addArray(name) {
  nameList[i] = name;
  console.log(nameList);
  i ++;
}
addArray("Taro");
addArray("Sachi");
addArray("Okabe");
console.log(nameList);



// 戻り値
function judge() {
  return true; // "return"で戻り値trueを返す
}
const result = judge(); // judgeで返された値を"result"に代入
if (result === true) {
  // resultがtrueならresultを出力
  console.log(result);
}


// オブジェクト
// データをまとめる箱のような役割
const myItem = {
  id: 1,
  name: "Ken",
  tall: 180,
  brother: ["Taku", "Minato", "Ryo"],
  calculate: function (number) {
    // オブジェクト内の関数をメゾットという
    return number ** 2;
  }
};
console.log(myItem.brother[2]); //　オブジェクト名ドットプロパティ名で参照
myItem.calculate(3);
myItem.age = 20; // 参照して追加
Object.assign(myItem, { // Object.assign()で複数追加
  language: "Japanese",
  hobby: "FootBall",
  major: "engineer II category"
})
console.log(myItem); // 増えてる!

// this
// オブジェクト名の記述を省略できる。アロー関数内では無理
const myInfo = {
  name: "Alex",
  age: 10,
  happyBirthDay: function () {
    return "本日、" + this.name + "は" + this.age + "歳になったよ!";
  },
};
console.log(myInfo.happyBirthDay());


// try-catch構文
function checkNumber(input) {
  try {
    if (isNaN(input)) { // isNaN: 「is Not a Number」の略、グローバル関数
      throw new Error("数字ではありません"); // Errorオブジェクトをcatchのeに投げる。
    }
    console.log("入力された数字:", Number(input));
  } catch (e) { // eの値をcatch
    console.log("エラー:", e.message); //　.massageでErrorオブジェクトの文字列を取得
  }
}
// テスト
checkNumber(123);    // → 入力された数字: 123
checkNumber("abc");    // → エラー: 数字ではありません
checkNumber("だー");       // → エラー: 数字ではありません
checkNumber("5.5");    // → 入力された数字: 5.5



// 標準オブジェクト[window, document]
// windowオブジェクト
console.log(window.innerHeight);
// windowオブジェクトは元より存在し、
// そのプロパティを用いることができる
console.log(innerWidth); // 通常オブジェクト名windowを省略できる
alert("hi!");

// documentオブジェクトはwindowのプロパティのひとつ
// documentオブジェクトはhtml, cssの情報をもっているため、
// jsからhtml, cssの操作が可能となる。(DOM操作)

// DOMとは、ドキュメント(Document)オブジェクト(Object)
// モデル(Model)の略で、
// その名の通り、HTMLなどの「ドキュメント」を
// ツリー状の「オブジェクト」の集まりで表現し、
// 操作可能にしたもの。

// htmlを書き換え
document.querySelector("#main").innerText = "書き換え可能なのだ";
// cssを書き換え
document.querySelector(".main").style.backgroundColor = "#000";


// event handler
// webページ全体に対するイベントにはwindow
window.addEventListener("load", function () {
  this.alert("完了");
});
// 部分的なイベントにはdocument
document.querySelector("#button").addEventListener("click", function () {
  alert("click");
});
document.querySelector("#button").addEventListener("click", click);
function click () {
  alert("click");
};



// setTimeout
const timeAction = setTimeout(function () {
  alert("hello");
}, 5000); // 5秒後にhello
console.log(timeAction);

function hello (a){
  console.log(a);
}
const timeAct = setTimeout(hello, 5000, "hello");



// todoList
// weatherForecast
// inputされた行の九九表
// inputされた名前を表示
// AjaxでgoogleMap表示
// うざい広告