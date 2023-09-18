#node block
FROM node:18-alpine AS nodework
WORKDIR /react-app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

#nginx block
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=nodework /react-app/build .
EXPOSE 80
CMD ["nginx","-g","daemon off;"]