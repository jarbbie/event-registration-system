FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps --network-timeout 100000

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]