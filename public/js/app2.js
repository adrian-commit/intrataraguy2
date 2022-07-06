Chart.defaults.color = '#fff'
Chart.defaults.borderColor = '#444'



const printCharts = () => {

    fetchCoastersData('http://localhost:3030/api/tasks/', 'http://localhost:3030/api/clients/', 'http://localhost:3030/api/services/' ,)
        .then(([allclients, allservices, alltasks]) => {
            console.log(allclients, allservices, alltasks)

            renderModelsChart(allCoasters)
            renderFeaturesChart(nationalCoasters)
            renderYearsChart(allCoasters)
            enableEventHandlers(nationalCoasters)
        })

}



const renderModelsChart = coasters => {

    const uniqueModels = [...new Set(coasters.map(coaster => coaster.model))]

    const data = {
        labels: uniqueModels,
        datasets: [{
            data: uniqueModels.map(currentModel => coasters.filter(coaster => coaster.model === currentModel).length),
            borderColor: getDataColors(),
            backgroundColor: getDataColors(20)
        }]
    }

    //Sirve para acomodar las leyendas//

    const options = {
        plugins: {
            legend: { position: 'left' }
        }
    }

    new Chart('modelsChart', { type: 'doughnut', data, options })
}




const renderFeaturesChart = coasters => {

    const data = {
        labels: coasters.map(coaster => coaster.name),
        datasets: [{
            label: 'Altura (m)',
            data: coasters.map(coaster => coaster.height),
            borderColor: getDataColors()[0],
            backgroundColor: getDataColors(20)[0]
        }]
    }

    const options = {
        plugins: {
            legend: { display: false }
        },
        scales: {
            r: {
                ticks: { display: false }
            }
        }
    }

    new Chart('featuresChart', { type: 'radar', data, options })
}




const renderYearsChart = coasters => {

    const years = ['1998-2000', '2001-2003', '2004-2006', '2007-2009', '2013-2015', '2016-2018', '2019-2021']

    const data = {
        labels: years,
        datasets: [{
            data: getCoastersByYear(coasters, years),
            tension: .5,
            borderColor: getDataColors()[1],
            backgroundColor: getDataColors(20)[1],
            fill: true,
            pointBorderWidth: 5
        }]
    }

    const options = {
        plugins: {
            legend: { display: false }
        }
    }

    new Chart('yearsChart', { type: 'line', data, options })
}



printCharts()