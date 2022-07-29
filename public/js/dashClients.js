Chart.defaults.color = '#fff'
Chart.defaults.borderColor = '#444'

fetch('http://localhost:3030/api/clients/')
    .then(response => response.json())
    .then(data => printCharts3(data))


function printCharts3(clients) {

    // Remove loading message, show chart panels 
    document.body.classList.add('running')

    // Call each chart function passing the coasters and DOM Canvas tag ID to be rendered
    compareClientsChart(clients, 'chartClients')

    function compareClientsChart(clients,id) {

        const uniqueTypes = [...new Set(clients.map(client => client.businessName))]

        const data = {
            labels: uniqueTypes,
            datasets: [{
                    data: uniqueTypes.map(currentbusinessName => clients.filter(client => client.businessName === currentbusinessName).length),
                    borderWidth: 1,
                    borderColor: styles.color.solids.map(eachColor => eachColor),
                    backgroundColor: styles.color.alphas.map(eachColor => eachColor)
                }]
        }
            // Every ChartJs chart can have multiple layout options
            const options = {
                legend: {
                    display: false,
                    labels:{
                        fontColor: '#fff' } 
                    
                },
                scales: {
                    yAxes: [{
                        gridLines: {
                            display: true
                        },
                        ticks: {
                            display: true
                        }
                    }],
                    xAxes: [{
                        barPercentage: 0.4,
                        ticks: {
                            display: true
                        }
                    }],
                    }
                }
            new Chart(id, { type: 'bar', data, options })
            }
        }