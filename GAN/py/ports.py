from flask import Flask, request, jsonify
from mask import applyMask
from inference import AdaINference
from PIL import Image
import base64
import json
import cv2
import io
import numpy as np

app = Flask(__name__)

@app.route('/transform', methods=['GET', 'POST'])
def transform():
	print("received")
	r = request.form
	#content_img = stringToRGB(r['input_object'])
	#style_img = stringToRGB(r['input_user'])
	import pdb; pdb.set_trace()
	mask = cv2.imread('data/shoe_mask.png')
	#stylized = model.predict(content_img, style_img, 1)
	#masked = applyMask(content_img, mask, stylized)
	print(masked.shape)
	#masked_encoded = base64.b64encode(masked)
	print("sending back")
	return masked_encoded

def stringToRGB(base64_string):
	imgdata = base64.b64decode(base64_string)
	byteImgIO = io.BytesIO(imgdata)
	img = Image.open(byteImgIO)
	img = np.asarray(img)
	img = img[:,:,:3]
	return img
	
	
if __name__ == '__main__':
	print("init")
	checkpoint = "checkpoint"
	vgg_path = "models/vgg_normalised.t7"
	print("init")
	model = AdaINference(checkpoint, vgg_path, device='/gpu:0')
	print("init")
	app.run(host='0.0.0.0', port=5000)
	
	
	
	
