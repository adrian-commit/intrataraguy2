Chart.defaults.color = '#fff'
Chart.defaults.borderColor = '#444'

fetch('http://localhost:3030/api/tasks')
    .then(response => response.json())
    .then(data => printCharts(data))


function printCharts(tasks) {

    // Remove loading message, show chart panels 
    document.body.classList.add('running')

    // Call each chart function passing the coasters and DOM Canvas tag ID to be rendered
    compareTareasChart(tasks, 'chartTareas')
}

function compareTareasChart(tasks, id) {

    // Every ChartJS chart needs data with labels and datasets
    const data = {
        labels: ['COMPROBANTES', 'LEGAJOS', 'RECIBOS', 'ASIENTOS', 'PLANES DE PAGOS', 'RESUMENES', 'BOLETAS', 'OTROS' ],
        datasets: [   // datasets is an Array of Objects, each Object contains one set of info/styles to be shown. In many charts, multiple sets of info can be rendered if multiple Objets are passed to the datasets Array
            {
                label: 'Registros',
                data: [
                    tasks.filter(eachtask => eachtask.records === 'COMPROBANTES').length,
                    tasks.filter(eachtask => eachtask.records === 'LEGAJOS').length,
                    tasks.filter(eachtask => eachtask.records === 'RECIBOS').length,
                    tasks.filter(eachtask => eachtask.records === 'ASIENTOS').length,
                    tasks.filter(eachtask => eachtask.records === 'PLANES DE PAGOS').length,
                    tasks.filter(eachtask => eachtask.records === 'RESUMENES').length,
                    tasks.filter(eachtask => eachtask.records === 'BOLETAS').length,
                    tasks.filter(eachtask => eachtask.records === 'OTROS').length,
                ],
                borderWidth: 1,
                borderColor: styles.color.solids[0],
                backgroundColor: styles.color.alphas.map(eachColor => eachColor)
            }
        ]
    }
        // Every ChartJs chart can have multiple layout options
        const options = {
            scale: {
                gridLines: {
                    color: '#444'
                },
                pointLabels: {
                    fontColor: '#fff'
                },
                ticks: {
                    display: false
                }
            },
            legend: {
                display: false
            }
        }
    
        // Every ChartJS chart receives two arguments: the Canvas id to place the chart, and an object with: chart type, data to show, layout options object (optional)
        new Chart(id, { type: 'radar', data, options })
    }

    