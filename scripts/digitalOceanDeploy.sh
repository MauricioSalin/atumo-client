#!/bin/sh

ssh root@142.93.54.182 -i digitalocean_rsa

git config --global user.email "diegonogueira.santos@gmail.com"
git config --global user.name "Diego Santos"

git pull

