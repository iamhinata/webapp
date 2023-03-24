const ctx = document.getElementById('myChart-bar');
const MONTHS = [
    '',
    '2',
    '',
    '4',
    '',
    '6',
    '',
    '8',
    '',
    '10',
    '',
    '12',
    '',
    '14',
    '',
    '16',
    '',
    '18',
    '',
    '20',
    '',
    '22',
    '',
    '24',
    '',
    '26',
    '',
    '28',
    '',
    '30',
    ''
];
const months = (config) => {
    const cfg = config || {};
    const count = cfg.count || 30;
    const section = cfg.section;
    const values = [];
    let i, value;

    for (i = 0; i < count; ++i) {
        value = MONTHS[Math.ceil(i) % 30];
        values.push(value.substring(0, section));
    }

    return values;
}
const labels = months({ count: 17 });
const data = {
    labels: labels,
    datasets: [{
        label: 'none',
        data: [1, 3, 5, 7, 1, 2, 7, 8, 5, 3, 5, 6, 7, 8, 1, 6, 5, 3, 2, 0, 7, 4, 3, 6, 5, 4, 3, 2, 8, 2, 6, 3],
        backgroundColor: ['#4699ca'],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ],
        borderWidth: 1,

    }]

};
const config = {
    type: 'bar',
    data: data,
    options: {
        plugins: {
            legend: {
                display: false,
            }
        }, //ラベル（グラフのタイトル）を消した
        scales: {
            yAxes: {
                gridLines: {
                    drawBorder: false
                }, //xxx線消そうとしたんだが無理だった
                beginAtZero: true,
                ticks: {
                    callback: function (tick) {
                        return tick.toString() + 'h'; //y軸の単位をつけた
                    }
                }
            },
            x: {
                display: true,
                stacked: false,
                gridLines: {
                    display: false
                }, //xxx線消そうとしたんだが無理だった
                ticks: {
                    max: 30,
                    min: 0, //xxxx軸全部表記されない、y軸の単位とびとびにならん
                }

            }
        }
    },
};
const myChart = new Chart(ctx, config);