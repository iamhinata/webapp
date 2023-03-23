window.onload = function () {
    var dataLabelPlugin = {
        afterDatasetsDraw: function (chart) {
            var ctx = chart.ctx;
            chart.data.datasets.forEach(function (dataset, 系列) {
                var meta = chart.getDatasetMeta(系列);
                if (!meta.hidden) {
                    meta.data.forEach(function (element, 要素) {
                        // ステップ１　数値を文字列に変換
                        // dataSum += dataset.data[要素];
                        // var ratio = dataset.data[要素]/dataSum*100;
                        // var dataString = ratio.toString();
                        var dataString = dataset.data[要素].toString();
                        // ステップ２　文字列の書体
                        ctx.fillStyle = "#fff";            // 色　'rgb(0, 0, 0)', 'rgba(192, 80, 77, 0.7)'
                        var fontSize = 14;                  // サイズ
                        var fontStyle = "normal";           // 書体 "bold", "italic"
                        // var fontFamily = "serif";           // フォントの種類 "sans-serif", "ＭＳ 明朝"
                        ctx.font = Chart.helpers.fontString(fontSize, fontStyle);
                        // ステップ３　文字列の位置の基準点
                        ctx.textAlign = 'center';           // 文字列　start, end, left, right, center
                        ctx.textBaseline = 'middle';        // 文字高　middle, top, bottom
                        // ステップ４　文字列のグラフでの位置
                        var padding = 5;                   // 点と文字列の距離
                        var position = element.tooltipPosition(); //文字列の表示　 fillText(文字列, Ｘ位置, Ｙ位置)
                        ctx.fillText(dataString + '%', position.x, position.y - (fontSize / 2) - padding);
                    });
                }
            });
        }
    };
    let context = document.querySelector("#dounut").getContext('2d')
    new Chart(context, {
        type: 'doughnut',
        data: {
            labels: ["JavasScript", "CSS", "PHP", "HTML", "Laravel", "SQL", "SHELL", "情報システム基礎知識（その他）"],
            datasets: [{
                data: [42, 18, 10, 8, 8, 5, 5, 4],
                backgroundColor: [
                    "#0033cc",
                    "#006699",
                    "#00ced1",
                    "#33ccff",
                    "#a8a8ff",
                    "#9966cc",
                    "#6633ff",
                    "#000066"]
            }],

        },
        options: {
            responsive: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        },
        plugins: [dataLabelPlugin]

    });

    //ドーナツ２
    let context2 = document.querySelector("#dounut2").getContext('2d')
    new Chart(context2, {
        type: 'doughnut',
        data: {
            labels: ["ドットインストール", "N予備校", "POSSE課題"],
            datasets: [{
                data: [42, 18, 10],
                backgroundColor: [
                    "#0033cc",
                    "#006699",
                    "#00ced1"]
            }],

        },
        options: {
            responsive: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        },
        plugins: [dataLabelPlugin]
    });

}

//円グラフ、上下の位置変える、まるにする、%表示、白線なくす