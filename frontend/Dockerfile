FROM node:8.12.0-alpine
ENV NPM_CONFIG_LOGLEVEL warn
copy . .
RUN npm install
CMD npm run start
EXPOSE 3000