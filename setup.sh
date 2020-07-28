#!/bin/bash
# This will quickly help you set up the Django React Mock Payment Interface
# Author : Dhruv Oberoi

flash="\033[5;33;40m"
red="\033[31;40m"
none="\033[0m"

echo "."
echo ".."
echo "..."
echo -e $flash"Cloning Repo..."$none
git clone https://github.com/oberoidhruv/django-react-mock-payment-gateway.git
cd django-react-mock-payment-gateway/backend/
echo "."
echo ".."
echo "..."
echo -e $flash"Installing Virtual Environment..."$none
pip3 install virtualenv
virtualenv env
echo "."
echo ".."
echo "..."
echo -e $flash"Starting Virtual Environment..."$none
source env/bin/activate

echo -e $flash"Installing Dependencies..."$none
pip3 install -r requirements.txt

printf "YOU:\t%s\n" "$USER on $HOSTNAME"
echo -e $flash"The installation is complete and the server will now run on 127.0.0.1:8000"$none
echo -e $red"Please use these superuser credentials to Admin access: "$none
echo -e $red"Username: user; Password: potato123"$none
echo "."
echo ".."
echo "..."
echo "Please run the following 2 commands in a new terminal to run the frontend"
echo ""
echo -e $red"cd django-react-mock-payment-gateway/frontend/gui/"$none
echo -e $red"npm start"$none
echo -e $flash"Starting Backend..."$none
python3 src/manage.py runserver 127.0.0.1:8000