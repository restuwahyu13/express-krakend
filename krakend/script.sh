#!/bin/sh

FC_ENABLE=1 \
  FC_SETTINGS="/configs/endpoints" \
  FC_PARTIALS="/configs/plugins" \
  krakend run -d -c /krakend.json
