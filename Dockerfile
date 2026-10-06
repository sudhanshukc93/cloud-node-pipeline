FROM node:20-alpine

WORKDIR /app

COPY package.json ./

COPY application.js ./

EXPOSE 3000

CMD ["npm", "start"]
