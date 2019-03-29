# Computergrafik I Docker Box

This is a very simple dockerbox which can be used for 
the development part of the `Computergrafik I` course of the `Beuth Hochschule fuer Technik`

The code template code has been provided by The university and I building on top of it.

## Prerequisites

The setup is mostly dockerised with a deployment and development build. Therefore `Docker` needs to be installed.

## Development

The development can be done inside the docker container by mounting the current directory in the docker container and executing.

For creating the container run:\
`docker build -t <yourTagName> ./docker/develop/`

For running the image run:\
`docker run -d -v $(pwd):/opt/www -p 8080:8080 <yourTagName>`


The page can be opened on Port `8080`

## Deployment

Right now the deployment is quite simple by creating the "production"-container\
`docker build -t <yourTagName> .`

After building the container it needs to be started on the specific port\

`docker run -d -p <yourPort>:8080 <yourTagName>`
