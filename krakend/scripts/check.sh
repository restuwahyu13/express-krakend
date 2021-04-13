#!/bin/sh

FC_ENABLE=1 \
  FC_SETTINGS="$PWD/configs/endpoints" \
  FC_PARTIALS="$PWD/configs/plugins" \
  krakend check -c "$PWD/krakend.json"
