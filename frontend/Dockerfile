FROM node:18 AS build

WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY ./public ./public
COPY ./src ./src
COPY .env ./
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /usr/app/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]