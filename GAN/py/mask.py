from PIL import Image
import sys
import pickle

def applyMask(original, mask, stylized):
	maskPixelMap = mask.load()
	originalPixelMap = original.load()
	stylizedPixelMap = stylized.load()

	for i in range(mask.size[0]):
		for j in range(mask.size[1]):
			if (sum(maskPixelMap[i, j]) - 255 < (255*4)/2):		#if pixel is kind of less than white
				maskPixelMap[i, j] = originalPixelMap[i, j]
			else:
				maskPixelMap[i, j] = stylizedPixelMap[i, j]

	return mask
	
if __name__ == '__main__':
	applyMask('original.png', 'shoe_mask.png', 'placeholder.png')