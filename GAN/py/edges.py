import cv2
import numpy as np
from matplotlib import pyplot as plt

img_name = 'IMG_0790'

img = cv2.imread(img_name + ".jpg",0)
edges = cv2.Canny(img,100,200)
edges = cv2.bitwise_not(edges)

cv2.imwrite(img_name + "_edges.jpg", edges)
