#node block
FROM node:18.16.0-alpine AS build
WORKDIR /react-app
COPY package*.json ./
RUN --mount=target=/react-app/node_modules,type=cache npm install --production
COPY . .
RUN --mount=target=/react-app/node_modules,type=cache npm run build

#nginx block
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /react-app/dist .
CMD ["nginx","-g","daemon off;"]