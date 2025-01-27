FROM node:18.17.1

WORKDIR /usr/app
COPY package*.json ./
RUN npm ci --omit=dev
COPY ./src ./src

CMD npm start