const ctx = document.getElementById('myChart-bar');
const MONTHS= [
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
    const count = cfg.count || 12;
    const section = cfg.section;
    const values = [];
    let i, value;

    for (i = 0; i < count; ++i) {
        value = MONTHS[Math.ceil(i) % 12];
        values.push(value.substring(0, section));
    }

    return values;
}
const labels = months({ count: 10 });
const data = {
    labels: labels,
    datasets: [{
        label: 'My First Dataset',
        data: [1,3,5,7,9,2,7,8,5,3,5,6,7,8,9,6,5,3,2,0,7,4,3,6,5,4,3,2,8,9,6,9],
        backgroundColor:['#4699ca'],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ],
        borderWidth: 1
    }]
};
const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
};
const myChart = new Chart(ctx, config);