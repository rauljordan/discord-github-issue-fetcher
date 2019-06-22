FROM node:9-alpine
  
RUN apk update && apk upgrade && \
    apk add --no-cache git python make g++

COPY package.json package-lock.json ./

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i -g npm@6.4
RUN npm ci
RUN mkdir /discord-issue-bot && mv ./node_modules ./discord-issue-bot/

## Move to /discord-issue-bot (eq: cd /discord-issue-bot)
WORKDIR /discord-issue-bot

## Copy everything from host to /discord-issue-bot in the container
COPY . .

CMD ["npm", "start"]
