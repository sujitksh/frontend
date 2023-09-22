#node block
FROM node:18.17.1-alpine AS build
WORKDIR /react-app
COPY package.json .
RUN npm install -g npm@10.1.0
COPY . .
RUN npm run build

#nginx block
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /react-app/dist .
CMD ["nginx","-g","daemon off;"]