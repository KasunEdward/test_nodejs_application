#!/bin/bash

#download node and npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node



#create our working directory if it doesn't exist
DIR="/var/www/html/test_nodejs_application"
if [ -d "$DIR" ]; then
    echo "${DIR} exists"
else 
    echo "Creating ${DIR} directory"
    mkdir ${DIR}
fi