from flask import Flask
from flask import jsonify
from flask import request
import os
app = Flask(__name__)


@app.route('/')
def hello():
    response = jsonify({'some': 'data'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/images', methods=['GET'])
def image():

    image = os.listdir("../react_website/images")

    cur_image = int(request.args.get('image_num'))
    print(len(image))
    if(cur_image == len(image) - 1):
        next_image = 0
    else:
        next_image = cur_image + 1

    response = jsonify(
        {
            'image' : image[cur_image],
            'next' : next_image
        }
    )

    return response

if __name__ == '__main__':
    app.run()