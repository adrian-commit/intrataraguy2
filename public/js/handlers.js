const enableEventHandlers = tasks => {

    document.querySelector('#featuresOptions').onchange = e => {

        const { value: property, text: label } = e.target.selectedOptions[0]

        const newData = tasks.map(tasks => tasks[property])

        updateChartData('featuresChart', newData, label)
    }
}