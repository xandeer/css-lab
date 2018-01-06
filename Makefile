install:
	yarn

build:
	yarn build

pull:
	git pull

deploy: pull install build