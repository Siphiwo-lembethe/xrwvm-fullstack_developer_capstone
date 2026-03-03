#!/bin/bash
echo "Starting Mongo backend..."
cd /home/project/xrwvm-fullstack_developer_capstone/server/database
docker build . -t nodeapp
docker-compose up -d

echo "Waiting for Mongo to start..."
sleep 10

echo "Setting up Django..."
cd /home/project/xrwvm-fullstack_developer_capstone/server
pip install virtualenv
virtualenv djangoenv
source djangoenv/bin/activate
python3 -m pip install -U -r requirements.txt
python3 manage.py migrate

echo "Starting Django server..."
python3 manage.py runserver
