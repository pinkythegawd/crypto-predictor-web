from flask import Flask, render_template, jsonify
import pandas as pd
import numpy as np

app = Flask(__name__)

# Sample historical data for Bitcoin and Ethereum
def generate_historical_data():
    dates = pd.date_range(start="2023-01-01", periods=30)
    btc_prices = np.random.randint(25000, 40000, size=(30,))
    eth_prices = np.random.randint(1500, 3000, size=(30,))
    return dates, btc_prices, eth_prices

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/news')
def news():
    return render_template('news.html')

@app.route('/predictions')
def predictions():
    return render_template('predictions.html')

@app.route('/historical-data')
def historical_data():
    dates, btc_prices, eth_prices = generate_historical_data()
    return jsonify({
        'dates': dates.strftime('%Y-%m-%d').tolist(),
        'btc_prices': btc_prices.tolist(),
        'eth_prices': eth_prices.tolist()
    })

if __name__ == '__main__':
    app.run(debug=True)
