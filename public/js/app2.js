Chart.defaults.color = '#fff'
Chart.defaults.borderColor = '#444'


const printCharts = () => {
    
    fetchCoastersData('http://localhost:3030/api/services', 'http://localhost:3030/api/clients', 'http://localhost:3030/api/tasks/')
    .then(([alltasks]) => {

        renderTypesChart(alltasks)
        renderTasksChart(alltasks)
        })
    } 

/**SERVICIOS Y GRAFICOS DE DONA */
    const renderTypesChart = tasks => {

        const uniqueTypes = [...new Set(tasks.map(task => task.type))]

        const data = { 
        labels: uniqueTypes,
        datasets: [{
            data:uniqueTypes.map(currentType => tasks.filter(task => task.type === currentType).length),
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
        labels: tasks.map(task => task.type),
        datasets: [{
            label: 'client (hs)',
            data: tasks.map(task => task.client),
            borderColor: getDataColors()[0],
            backgroundColor: getDataColors(20)[0],
        }] 
    }

    new Chart('featuresChart',{ type: 'radar', data })

}



printCharts()