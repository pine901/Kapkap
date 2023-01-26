FROM node:14.16.1-alpine
# RUN apk add --update nodejs npm gcc git musl-dev
RUN apk add --update gcc git musl-dev

# RUN npm install --global yarn

WORKDIR /opt/kapkap-front

COPY . .
RUN yarn install
RUN yarn generate

EXPOSE 8080
CMD ["yarn", "start"]
