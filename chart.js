// charts.js

// Fetch historical data for charts
async function fetchHistoricalData() {
    const response = await fetch('/historical-data');
    const data = await response.json();
    return data;
}

async function createCharts() {
    const data = await fetchHistoricalData();

    // Bitcoin Chart
    const btcCtx = document.getElementById('btc-chart').getContext('2d');
    new Chart(btcCtx, {
        type: 'line',
        data: {
            labels: data.dates,
            datasets: [{
                label: 'Bitcoin Price (USD)',
                data: data.btc_prices,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: true,
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Date'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Price in USD'
                    }
                }
            }
        }
    });

    // Ethereum Chart
    const ethCtx = document.getElementById('eth-chart').getContext('2d');
    new Chart(ethCtx, {
        type: 'line',
        data: {
            labels: data.dates,
            datasets: [{
                label: 'Ethereum Price (USD)',
                data: data.eth_prices,
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: true,
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Date'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Price in USD'
                    }
                }
            }
        }
    });
}

// Call the function to create charts
createCharts();
