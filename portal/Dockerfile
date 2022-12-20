ARG NODE_VERSION=14.15.5
FROM node:${NODE_VERSION} as builder

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app
WORKDIR /home/node/app
USER node
ARG BRANCH

COPY --chown=node:node . .
RUN node buildscript.js $BRANCH
COPY package*.json ./
COPY .npmrc ./

RUN npm install
RUN node buildscript.js $BRANCH

### second-step
FROM node:${NODE_VERSION}-alpine

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app
WORKDIR /home/node/app
USER node

COPY --chown=node:node --from=builder /home/node/app/package*.json ./
COPY --chown=node:node --from=builder /home/node/app/tsconfig.json ./
COPY --chown=node:node --from=builder /home/node/app/build/ ./build/
COPY --chown=node:node --from=builder /home/node/app/public/ ./public/
COPY --chown=node:node --from=builder /home/node/app/node_modules/ ./node_modules/

EXPOSE 3000
CMD ["npm","run","run:pod"]
