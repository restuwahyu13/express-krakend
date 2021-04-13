#!/bin/sh

FC_ENABLE=1 \
  FC_SETTINGS="/etc/krakend/configs/endpoints" \
  FC_PARTIALS="/etc/krakend/configs/plugins" \
  krakend run -d -c "/etc/krakend/krakend.json"
