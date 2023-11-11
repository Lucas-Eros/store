FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=4000
ENV MONGODB_URI=mongodb://0.0.0.0:27017/store

EXPOSE $PORT

CMD ["npm", "start"]
