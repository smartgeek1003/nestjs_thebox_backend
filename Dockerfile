#FROM node:16.15.0-slim AS development
FROM node:16.15.0-alpine3.15 AS development

WORKDIR /usr/src/app

COPY . .

RUN rm -rf node_modules
#RUN npm install glob rimraf
#RUN npm install --save @nestjs/passport passport passport-local
#RUN npm install --save-dev @types/passport-local
#RUN npm i bcrypt
#RUN npm i -D @types/bcrypt
RUN npm install
#RUN npm rebuild bcrypt --build-from-source
RUN npm run build

FROM node:16.15.0-alpine3.15 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]