FROM node:latest as build-stage
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build-stage /app/dist/music-store-stanalone/browser /usr/share/nginx/html
EXPOSE 80

COPY ./nginx.conf /etc/nginx/nginx.conf