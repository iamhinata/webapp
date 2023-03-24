//モーダル開く
const buttonOpen1 = document.getElementById('modal_button');
const modal1 = document.getElementById('modal');
const buttonClose1 = document.getElementsByClassName('modalClose')[0];

// ボタンがクリックされた時
buttonOpen1.addEventListener('click', modal_button);
function modalOpen() {
    modal1.style.display = 'block';
}

// バツ印がクリックされた時
buttonClose1.addEventListener('click', modalClose);
function modalClose() {
    modal1.style.display = 'none';
}

// // モーダルコンテンツ以外がクリックされた時
// addEventListener('click', outsideClose);
// function outsideClose(e) {
//   if (e.target == modal1) {
//     modal1.style.display = 'none';
//   }
// }





//完了モーダル開く
const buttonOpen = document.getElementById('complete');
const modal = document.querySelector('.overlay2');
const buttonClose = document.querySelectorAll('.modalClose')[0];

// ボタンがクリックされた時
document.querySelector('.header_button').addEventListener('click', () => {
    console.log('click')
    document.querySelector('.overlay1').style.display = 'block';
})

buttonOpen.addEventListener('click', () => {
    console.log('clicked')
    document.querySelector('.overlay1').style.display = 'none';
    document.querySelector('.overlay2').style.display = 'block';
});



// バツ印がクリックされた時
buttonClose.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.overlay1').style.display = 'none';
        document.querySelector('.overlay2').style.display = 'none';
    })
});


// // モーダルコンテンツ以外がクリックされた時
// addEventListener('click', overlay2);
// function outsideClose(e) {
//     if (e.target == modal) {
//         modal.style.display = 'none';
//     }
// }




//カレンダー    xxx押しても反応しない。
const buttonOpen2 = document.getElementById('calendar_button');
const modal2 = document.getElementById('calendar');
// const buttonClose = document.getElementsByClassName(' ')[0];

buttonOpen2.addEventListener('click', calendar_button);
function complete() {
    modal2.style.display = 'block';
}





const weeks = ['sun', 'mon', 'tue', 'wed', 'thr', 'fri', 'sat']
const date = new Date()
const year = date.getFullYear()
const month = date.getMonth() + 1
const startDate = new Date(year, month - 1, 1) // 月の最初の日を取得
const endDate = new Date(year, month, 0) // 月の最後の日を取得
const endDayCount = endDate.getDate() // 月の末日
const startDay = startDate.getDay() // 月の最初の日の曜日を取得
let dayCount = 1 // 日にちのカウント
let calendarHtml = '' // HTMLを組み立てる変数   xxxここコピペしただけでよくわかっていない

calendarHtml += '<h1>' + year + '/' + month + '</h1>'
calendarHtml += '<table>'

// 曜日の行を作成
for (let i = 0; i < weeks.length; i++) {
    calendarHtml += '<td>' + weeks[i] + '</td>'
}

for (let w = 0; w < 6; w++) {
    calendarHtml += '<tr>'

    for (let d = 0; d < 7; d++) {
        if (w == 0 && d < startDay) {
            // 1行目で1日の曜日の前
            calendarHtml += '<td></td>'
        } else if (dayCount > endDayCount) {
            // 末尾の日数を超えた
            calendarHtml += '<td></td>'
        } else {
            calendarHtml += '<td>' + dayCount + '</td>'
            dayCount++
        }
    }
    calendarHtml += '</tr>'
}
calendarHtml += '</table>'

document.querySelector('#calendar').innerHTML = calendarHtml