from flask import Flask
app = Flask(__name__)


@app.route('/')
def hello():
    return "../../images/backup2.jpg"

if __name__ == '__main__':
    app.run()