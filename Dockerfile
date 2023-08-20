FROM node:lts-alpine as build

WORKDIR /src

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn run build

FROM node:lts-alpine

COPY --from=build /src/.output /src/.output
COPY --from=build /src/node_modules /src/node_modules

CMD [ "node", "src/.output/server/index.mjs" ]