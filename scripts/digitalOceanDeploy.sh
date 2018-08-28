#!/bin/sh
sudo apt-get update -y && apt-get install sshpass -y
sudo sshpass -p largatomama root@142.93.54.182

git config --global user.email "diegonogueira.santos@gmail.com"
git config --global user.name "Diego Santos"

git pull

