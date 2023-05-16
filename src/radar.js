import Chart from 'chart.js/auto';

var data = {
    labels: [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [100, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
        label: 'My Second Dataset',
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
};

var radar2 = '';

function radar() {
    radar2 = new Chart(document.getElementById('radar'), {
        type: 'radar',
        data: data,
    })
}

radar();

function mudardata() {
    var i = 0;
    data.datasets[0].data[i] = data.datasets[0].data[i] + 10;
    i++;
    console.log(data.datasets[0].data)
    if (radar2 !== '') {
        radar2.update();
    }
    if (i > 7) { i = 0 };
}

setInterval(mudardata, 1);