#node block
FROM node:18.16.0-alpine AS build
WORKDIR /react-app
COPY package*.json ./
RUN npm ci 
COPY . .
RUN npm run build

#2-stage build
FROM node:18.16.0-alpine
COPY --from=build /node_modules ./node_modules

#nginx block
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /react-app/dist .
CMD ["nginx","-g","daemon off;"]