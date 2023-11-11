FROM node:14 as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:14-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app .

ENV PORT=4000
ENV MONGODB_URI=mongodb://mongo:27017/store

EXPOSE $PORT

CMD ["npm", "start"]
