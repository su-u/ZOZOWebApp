FROM node:10.16.0-alpine

RUN npm install;
WORKDIR /app
RUN npm install;
EXPOSE 3000
CMD ["sh"]