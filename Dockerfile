FROM node:12

WORKDIR /usr/src/app

ARG NPM_TOKEN
RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc
RUN npm config set globalconfig /usr/src/app/.npmrc
RUN npm i -g @phinxlab/chino-cli typescript

COPY package*.json ./

RUN npm install
RUN rm -f .npmrc

COPY . .

EXPOSE 9099

CMD tsc && cd build && node index