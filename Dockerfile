FROM node:10.16.0-alpine

ENV NODE_ENV=production

RUN npm install;
WORKDIR /app
RUN npm install;
EXPOSE 3000