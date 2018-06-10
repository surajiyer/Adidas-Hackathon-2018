from transform import transform
import cv2
import numpy as np


content = np.asarray(cv2.imread("data/content/das.jpg"))
style = np.asarray(cv2.imread("data/styles/trippy.jpg"))
new_img = transform(content, style)
cv2.imwrite("naujas_pav.png", new_img)