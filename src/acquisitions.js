import Chart from 'chart.js/auto'

var data = [
    { azimute: 2009 },
    { azimute: 2010 },
    { azimute: 2011 },
    { azimute: 2012 },
    { azimute: 2013 },
    { azimute: 2014 },
    { azimute: 2015 },
    { azimute: 2017 },
];


const dataD = [
    { count: 10 },
    { count: 45 },
    { count: 20 },
    { count: 15 },
    { count: 25 },
    { count: 22 },
    { count: 30 },
    { count: 27 },
];

var meugrafico = '';

function grafico() {

    meugrafico = new Chart(
        document.getElementById('acquisitions'), {
            type: 'bar',
            data: {
                labels: data.map(row => row.azimute),
                datasets: [{
                    label: 'Acquisitions by year',
                    data: dataD.map(row => row.count)
                }]
            }
        }
    )
};

grafico();

function MudarDados() {
    data.push({ azimute: 2020 });
    dataD.push({ count: 50 });
    console.log(data);
    console.log(dataD);
    if (meugrafico !== '') {
        meugrafico.data.labels = data.map(row => row.azimute);
        meugrafico.data.datasets[0].data = dataD.map(row => row.count);
        meugrafico.update();
    }
}

//setInterval(MudarDados, 100);