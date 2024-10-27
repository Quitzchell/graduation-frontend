FROM node:20-alpine

RUN mkdir -p /var/www/html
COPY ./src /var/www/html

WORKDIR /var/www/html

CMD ["npm", "run", "dev"]
