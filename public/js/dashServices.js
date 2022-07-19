Chart.defaults.color = '#fff'
Chart.defaults.borderColor = '#444'


// API Ajax call
fetch('http://localhost:3030/api/services')
    .then(response => response.json())
    .then(data => printCharts2(data))


function printCharts2(services) {

    // Remove loading message, show chart panels 
    document.body.classList.add('running')

    // Call each chart function passing the coasters and DOM Canvas tag ID to be rendered
    compareRadialChart(services, 'chartServicios')
    compareTipoActividadChart(services, 'chartTipoActividad')

}

function compareRadialChart(services, id) {

    // Every ChartJS chart needs data with labels and datasets
    const data = {
        labels: ['Laboral', 'Impuestos', 'Contabilidad', 'Administración'],
        datasets: [   // datasets is an Array of Objects, each Object contains one set of info/styles to be shown. In many charts, multiple sets of info can be rendered if multiple Objets are passed to the datasets Array
            {
                data: [
                    services.filter(eachService => eachService.type === 'Laboral').length,
                    services.filter(eachService => eachService.type === 'Impuestos').length,
                    services.filter(eachService => eachService.type === 'Contabilidad').length,
                    services.filter(eachService => eachService.type === 'Administración').length
                ],
                borderWidth: 1,
                borderColor: styles.color.solids.map(eachColor => eachColor),
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
                ticks: {
                    display: false
                }
            },
            pointLabels: {
                fontColor: '#fff'
            },
            legend: {
                position: 'right',
                labels: {
                    fontColor: '#fff'
                }
            }
        }
    
        // Every ChartJS chart receives two arguments: the Canvas id to place the chart, and an object with: chart type, data to show, layout options object (optional)
        new Chart(id, { type: 'polarArea', data, options })
    }

   
    function compareTipoActividadChart(services, id) {
    
        // Every ChartJS chart needs data with labels and datasets
        const data = {
            labels: ['SERVICIO', 'AGROPECUARIA', 'CONTRUCCION', 'UNIPERSONAL', 'COMERCIAL' ],
            datasets: [   // datasets is an Array of Objects, each Object contains one set of info/styles to be shown. In many charts, multiple sets of info can be rendered if multiple Objets are passed to the datasets Array
                {
                    data: [
                        services.filter(eachService => eachService.typeActivity === 'SERVICIO').length,
                        services.filter(eachService => eachService.typeActivity === 'AGROPECUARIA').length,
                        services.filter(eachService => eachService.typeActivity === 'CONTRUCCION').length,
                        services.filter(eachService => eachService.typeActivity === 'UNIPERSONAL').length,
                        services.filter(eachService => eachService.typeActivity === 'COMERCIAL').length
                    ],
                    borderWidth: 1,
                    borderColor: styles.color.solids.map(eachColor => eachColor),
                    backgroundColor: styles.color.alphas.map(eachColor => eachColor)
                }
            ]
        }
            // Every ChartJs chart can have multiple layout options
            const options = {
                legend: {
                    position: 'right',
                    labels: {
                        fontColor: '#fff',
                    }
                }
            }
        
            // Every ChartJS chart receives two arguments: the Canvas id to place the chart, and an object with: chart type, data to show, layout options object (optional)
            new Chart(id, { type: 'doughnut', data, options })
        }




    