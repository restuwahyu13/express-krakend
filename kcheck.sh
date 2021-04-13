#!/bin/sh
docker run \
  -e FC_ENABLE=1 \
  -e FC_PARTIALS="$PWD" \
  -e FC_OUT=out.json \
  -p 8080:8080 \
  -p 8090:8090 \
  -v "$PWD:/etc/krakend" \
  devopsfaith/krakend \
  check -d -c "krakend.json"
