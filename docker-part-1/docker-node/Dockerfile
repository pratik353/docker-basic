# Configuration file responsible for create docker image


# step 1: choose base image e.g. ubuntu 
# It will pull ubuntu image from docker.hub
FROM ubuntu  

# run command - used to execute command :- update all packages
RUN apt-get update 

RUN apt-get install -y curl

RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -

RUN apt-get upgrade -y

RUN apt-get install -y nodejs

# It will tell docker to go to app dir AND copy below files/dir in /app folder
WORKDIR /app

COPY package.json package.json

COPY package-lock.json package-lock.json

# copy local file into image 
# COPY <LOCAL_FILE> <IMAGE_FILE_NAME which want to create in image>
COPY index.js index.js

# copy all files from dir
# to ignore node modules and other dir --> create .dockerignore file
COPY . .

RUN npm install

# ENTRYPOINT = whenever anyonr runs this image we need to run node js with main.js file
ENTRYPOINT [ "node", "index.js"]