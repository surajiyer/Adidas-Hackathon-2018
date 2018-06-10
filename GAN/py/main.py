python train.py --content-path data/val2014/val2014 --style-path data/art/train_1 --batch-size 8 --content-weight 1 --style-weight 0.1 --tv-weight 0 --checkpoint checkpoint --learning-rate 1e-4 --lr-decay 1e-5

python stylize.py --checkpoint checkpoint --style-path data/style --content-path data/shoes