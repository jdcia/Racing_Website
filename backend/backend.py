from flask import Flask
from flask import jsonify
from flask import request
import json
import os
import base64
app = Flask(__name__)


@app.route('/')
def hello():
    response = jsonify({'some': 'data'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/pigeons', methods=['GET'])
def image():

    images = os.listdir("./data")

    cur_image = int(request.args.get('data_num'))
    print(len(images))

    data = get_data("./data/" + images[cur_image])

    data["total_images"] = len(images)

    response = json.dumps(data)

    return response



#-----------------------------------------------------------------
#Helper functions

def get_data(dir_name):

    result = {}
    
    files = os.listdir(dir_name)

    print(files)

    image = open(dir_name + "/" + files[1], "rb")

    print(image.name)

    result["image"] = base64.b64encode(image.read()).decode("utf-8")

    #print(result["image"])

    fil = open(dir_name + "/" + files[0], "r")

    for i in fil.readlines():
        temp = i.split(" ")
        result[temp[0]] = temp[1].strip("\n")

    
    return result

if __name__ == '__main__':
    app.run()