FROM node:20-alpine

WORKDIR /var/www/html

COPY ./src/package*.json ./

RUN npm install

COPY ./src .

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0"]