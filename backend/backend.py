from flask import Flask
from flask import jsonify
app = Flask(__name__)


@app.route('/')
def hello():
    response = jsonify({'some': 'data'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == '__main__':
    app.run()