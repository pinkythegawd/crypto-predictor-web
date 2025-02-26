const fetchCryptoData = async () => {
    try {
        const btcResponse = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const ethResponse = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');

        const btcData = await btcResponse.json();
        const ethData = await ethResponse.json();

        document.getElementById('btc-price').innerText = `$${btcData.bitcoin.usd}`;
        document.getElementById('eth-price').innerText = `$${ethData.ethereum.usd}`;
        
        // Optionally, you can add code here to update charts or other UI elements
    } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
    }
};

// Call the function to fetch data
fetchCryptoData();

// Set an interval to refresh data every minute
setInterval(fetchCryptoData, 60000);
