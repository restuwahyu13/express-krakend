FROM node:14-alpine
WORKDIR /usr/src/app
COPY package.json ./usr/src/app/
COPY . ./usr/src/app/
RUN npm install --silent
EXPOSE 3000
CMD npm run dev