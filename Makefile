path := $(realpath krakend/command.sh)

up:
	docker-compose up -d --build

down:
	docker-compose down

check:
	@sh ${path}