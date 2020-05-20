FROM node:alpine3.11 AS front

WORKDIR /usr/src/front 
COPY . .
RUN ["npm", "install"]
RUN ["npm", "run", "build"]
RUN ["npm", "install", "-g", "serve"]
RUN ["serve", "-s", "build", "-l", "80"]

EXPOSE 80
