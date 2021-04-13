FROM devopsfaith/krakend:latest
WORKDIR /etc/krakend
COPY ./krakend/krakend.json \
  ./krakend/script.sh ./
COPY ./krakend ./
CMD ["/etc/krakend/script.sh"]