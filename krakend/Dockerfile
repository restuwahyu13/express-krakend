FROM devopsfaith/krakend:latest
WORKDIR /etc/krakend
COPY ./krakend/krakend.json \
  ./krakend/script.sh /etc/krakend/
COPY ./krakend ./etc/krakend/
ENTRYPOINT [ "/etc/krakend/script.sh" ]