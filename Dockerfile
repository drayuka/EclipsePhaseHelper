FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=prod

COPY ./helper/web/base/* ./web/

COPY ./helper/app/dist/* ./app/

EXPOSE 443

CMD ["node", "./app/base.js"]