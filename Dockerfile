FROM node:20-alpine
WORKDIR /app

COPY package* .

RUN npm i

COPY . .

RUN npm run migrate

CMD ["npm", "run", "dev"]