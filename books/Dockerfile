FROM node:14-alpine
WORKDIR /usr/src/app
COPY ./books/package*.json ./
COPY ./books ./
RUN npm install --silent
EXPOSE 3000
CMD npm run dev