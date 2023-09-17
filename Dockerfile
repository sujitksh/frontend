#node block
FROM node:18-alpine as nodework
WORKDIR /react-app
COPY package.json package-lock.json .
RUN npm install
COPY . .
RUN npm run build

#nginx block
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
COPY --from=nodework /react-app/build .
CMD ["nginx","-g","daemon off;"]