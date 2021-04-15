#!/bin/sh

docker build -t krakend-check . -f Dockerfile.check &&
  docker run -p 8080:8080 krakend-check --rm &&
  docker rmi krakend-check -f