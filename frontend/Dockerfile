FROM node:8.12.0-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
#RUN npm install
WORKDIR /app/src
CMD npm start
EXPOSE 3000