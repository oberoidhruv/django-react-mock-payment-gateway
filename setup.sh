#!/bin/bash
# This will quickly help you set up the Django React Mock Payment Interface

flash="\033[5;33;40m"
red="\033[31;40m"
none="\033[0m"
git clone https://github.com/oberoidhruv/django-react-mock-payment-gateway.git
cd django-react-mock-payment-gateway/backend/
pip3 install virtualenv
virtualenv env
source env/bin/activate
pip3 install -r requirements.txt

printf "Name:\t%s\n" "$USER" on "$HOSTNAME"
echo -e $flash"The installation is complete and the server will now run on 127.0.0.1:8000"$none
echo -e $red"Please use these superuser credentials to Admin access: "$none
echo -e $red"Username: user; Password: potato123"$none


python3 manage.py runserver 127.0.0.1:8000