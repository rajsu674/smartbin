FROM node:8.12.0-alpine
ENV NPM_CONFIG_LOGLEVEL warn
copy . .
RUN npm install -g feathers-cli yarn
CMD npm run start
EXPOSE 3030