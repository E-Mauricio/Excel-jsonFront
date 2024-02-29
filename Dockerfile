# Stage 1
FROM node:latest as build-step
WORKDIR /app
COPY . /app
RUN npm install -g npm@7.12.0
RUN npm install
RUN npm run build --prod

# Stage 2
FROM nginx:alpine
COPY --from=build-step /app/dist /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-step /app/nginx-custom.conf /etc/nginx/conf.d/default.conf