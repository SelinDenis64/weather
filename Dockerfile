FROM alpine:3.11.3
ARG BRANCH
ARG PORT
RUN apk add --update nodejs npm bash git
COPY package.json /www/package.json
RUN cd /www; npm install
COPY . /www
WORKDIR /www
ENV PORT "${PORT}"
EXPOSE "${PORT}"
ARG ENV
CMD npm run start-"${BRANCH}"