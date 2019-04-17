FROM node:lts-alpine
RUN npm -g install yarn
WORKDIR /app
ADD package.json /app/
ADD yarn.lock /app/
RUN yarn install
ADD . .
RUN yarn build
CMD ["yarn","serve"]
EXPOSE 8080