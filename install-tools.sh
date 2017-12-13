#! /bin/bash -x

# install system dependencies
sudo apt-get update
sudo apt-get install build-essential libssl-dev

# nvm install script
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash

# Current LTS node version
echo -e "To install node use: nvm install 8.9.1";
