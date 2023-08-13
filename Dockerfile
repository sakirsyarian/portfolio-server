FROM node:18.17.0

ENV PORT=4000

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]