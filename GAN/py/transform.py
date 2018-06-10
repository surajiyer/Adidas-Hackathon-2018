from inference import AdaINference

def init():
	checkpoint = "checkpoint"
	vgg_path = "models/vgg_normalised.t7"
	global model
	model = AdaINference(checkpoint, vgg_path, device='/gpu:0')
	

def transform(content_img, style_img):
	stylized_rgb = model.predict(content_img, style_img, 1)
	return stylized_rgb