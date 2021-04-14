krakendPath := $(realpath krakend)
authorsPath := $(realpath books)
booksPath := $(realpath books)

up:
	@docker-compose up -d --build

down:
	@docker-compose down

check:
	@cd ${krakendPath} && sh scripts/command.sh

sa:
	@cd ${authorsPath} && npm start

sb:
	@cd ${booksPath} && npm start

da:
	@cd ${authorsPath} && npm run dev

db:
	@cd ${booksPath} && npm run dev