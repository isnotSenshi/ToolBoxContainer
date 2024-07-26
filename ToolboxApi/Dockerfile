FROM node:14.21.3 AS development

ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

WORKDIR /usr/src/app

ARG PORT=3001
ENV PORT $PORT
EXPOSE $PORT

COPY package.json /usr/src/app/package.json
RUN npm install

COPY . /usr/src/app

CMD [ "npm", "start" ]