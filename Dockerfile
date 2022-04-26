# parent image
FROM node:17-alpine

# working Directory
WORKDIR /api

# copy sorce code
COPY . .

# install deps
RUN yarn install

# port
EXPOSE 5000

# run api
CMD [ "node", "index.js" ]