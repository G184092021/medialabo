let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 1;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let yoso = 4;       // 第5回課題:テキストボックスの数値をここに代入
    


        let pre = (kaisu + "回目の予想: " + yoso);
        let s = document.querySelector('span#pre');
        s.textContent = pre;

    
        if(yoso !== kotae && kaisu === 3){
            let ans = ("まちがい．残念でした答えは " + kotae + " です．");
        }
        else if(kaisu >= 4){
            ans = ("答えは " + kotae + " でした．すでにゲームは終わっています")
        }
        else if(yoso === kotae){
            ans = ("正解です.おめでとう!");
        }
        else if(kotae > yoso){
            ans = ("まちがい.答えはもっと大きいですよ");
        }
        else if(kotae < yoso){
            ans = ("まちがい．答えはもっと小さいですよ");
        }
        let d = document.querySelector('span#ans');
        d.textContent = ans;
    
    
}