// Function to handle form submission and add cryptocurrency to portfolio
document.getElementById('crypto-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('crypto-name').value;
    const amount = document.getElementById('crypto-amount').value;
    const price = document.getElementById('crypto-price').value;

    const portfolioList = document.getElementById('portfolio-list');

    // Create a new portfolio item
    const portfolioItem = document.createElement('div');
    portfolioItem.classList.add('portfolio-item');
    portfolioItem.innerHTML = `<strong>${name}</strong>: ${amount} coins at $${
