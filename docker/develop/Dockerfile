FROM alpine:latest
LABEL maintainer="sven.kroell@gmail.com"

RUN apk update && apk add nodejs npm git yarn && apk add -u yarn
RUN yarn global add http-server

WORKDIR /opt/www
RUN yarn add dojo dijit dojox dojo-util


CMD http-server /opt/www
