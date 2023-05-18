import Chart from 'chart.js/auto'
import { useStates } from 'react'


var dados = []

fetch('http://localhost:4000/azimute')
    .then((resposta) => resposta.json())
    .then((data) => {
        dados = data;
        grafico();
    });


function atualizarGrafico() {
    fetch('http://localhost:4000/azimute')
        .then((resposta) => resposta.json())
        .then((data) => {
            dados = data;
            MudarDados();
            console.log(dataD);
        });
}


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
                labels: dados.data.map(row => row.azimute),
                datasets: [{
                    label: 'Acquisitions by year',
                    data: dataD.map(row => row.count)
                }]
            }
        }
    )
};


function MudarDados() {
    dataD.push({ count: 50 });
    /*dados.push({ azimute: 2020 });
    dataD.push({ count: 50 });
    console.log(dados);
    console.log(dataD);*/
    if (meugrafico !== '') {
        meugrafico.data.labels = dados.data.map(row => row.azimute);
        meugrafico.data.datasets[0].data = dataD.map(row => row.count);
        meugrafico.update();
    }
}

setInterval(atualizarGrafico, 100);