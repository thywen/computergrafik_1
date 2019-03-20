FROM alpine:latest
LABEL maintainer="sven.kroell@gmail.com"

RUN apk update && apk add nodejs npm git yarn && apk add -u yarn
RUN yarn global add http-server

WORKDIR /opt/www

COPY index.html ./
COPY ./css ./css
COPY ./textures ./textures
COPY ./cog1 ./cog1
RUN yarn add dojo dijit dojox dojo-util

CMD http-server /opt/www

EXPOSE 8080
