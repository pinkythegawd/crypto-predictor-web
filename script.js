// Function to fetch cryptocurrency data
async function fetchData(crypto) {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${crypto.toLowerCase()}&vs_currencies=usd`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Update the price on the webpage
        if (crypto === 'BTC') {
            document.getElementById('btc-price').innerText = `$${data.btc.usd.toLocaleString()}`;
        } else if (crypto === 'ETH') {
            document.getElementById('eth-price').innerText = `$${data.eth.usd.toLocaleString()}`;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to fetch data. Please try again later.');
    }
}

// Optional: Fetch initial data on page load
window.onload = function() {
    fetchData('BTC');
    fetchData('ETH');
};
