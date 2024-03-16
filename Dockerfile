# Dockerfile
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:18-alpine

WORKDIR /app
COPY --from=build /app/build /app
COPY package*.json ./
RUN npm install --production

EXPOSE 5000
CMD ["npm", "start"]