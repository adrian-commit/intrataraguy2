Chart.defaults.color = '#fff'
Chart.defaults.borderColor = '#444'


const printCharts = () => {
    
    fetchCoastersData('http://localhost:3030/api/services', 'http://localhost:3030/api/clients', 'http://localhost:3030/api/tasks/')
    .then(([allservices, alltasks]) => {

        renderTypesChart(allservices)
        renderTasksChart(alltasks)
        })
    } 

/**SERVICIOS Y GRAFICOS DE DONA */
    const renderTypesChart = services => {

        const uniqueTypes = [...new Set(services.map(services => services.type))]

        const data = { 
        labels: uniqueTypes,
        datasets: [{
            data:uniqueTypes.map(currentType => services.filter(service => service.type === currentType).length),
            borderColor: getDataColors(),
            backgroundColor: getDataColors(20),
        }]
    }

    const options = {
        plugins: {
            legend: { position: 'left' }
        }
    }

    new Chart('TypesCharts',{ type: 'doughnut', data, options })
 }

 
 //**TAREAS Y GRAFICO DE MAPAS*//

const renderTasksChart = tasks => {

    const data = {
        labels: tasks.map(tasks => tasks.type),
        datasets: [{
            label: 'client (hs)',
            data: tasks.map(tasks => tasks.name),
            borderColor: getDataColors()[0],
            backgroundColor: getDataColors(20)[0],
        }] 
    }

    new Chart('featuresChart',{ type: 'radar', data })

}



printCharts()