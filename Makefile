include .env
include .env.local

# STORYBLOK

storyblok-pull-components: ## Pull components from Storyblok
	npx storyblok pull-components --space $(STORYBLOK_SPACE_ID) --path ./src/storyblok/gen/ --file-name storyblok

storyblok-generate-types: ## Generate TypeScript type definitions from Storyblok components
	npx storyblok generate-typescript-typedefs --sourceFilePaths ./src/storyblok/gen/components.storyblok.json --destinationFilePath ./src/storyblok/gen/component-types-sb.d.ts --JSONSchemaToTSOptionsPath ./src/storyblok/config/JSONSchemaToTSOptions.json

storyblok-types: # pull components and generate types from Storyblok
	@$(MAKE) -s storyblok-pull-components
	@$(MAKE) -s storyblok-generate-types

storyblok-login:
	storyblok login

storyblok-logout:
	storyblok logout
# STORYBLOK


# SERVER SCRIPTS
.PHONY server-socket:
server-socket:
	./server-scripts/socket.sh $(NODE_APP_PORT)

.PHONY: js-server
.ONESHELL:
js-server:
	@$(MAKE) -s server-socket
	./server-scripts/next.sh $(NODE_APP_PORT) $(NODE_APP_DIR) ./log/nextjs.log

.PHONY: js-remove-server
.ONESHELL:
js-remove-server:
	./server-scripts/remove-socket.sh
	./server-scripts/remove-server.sh

.PHONY: js-server-dev
.ONESHELL:
js-server-dev:
	@$(MAKE) -s server-socket
	./server-scripts/next-dev.sh $(NODE_APP_PORT) $(NODE_APP_DIR)
# SERVER SCRIPTS

.PHONY: pnpm-install
pnpm-install:
	pnpm install --frozen-lockfile

.PHONY: build
build:
	. ${NVM_DIR}/nvm.sh && nvm use || nvm install $(cat .nvmrc)
	@$(MAKE) -s pnpm-install
	pnpm build
	@$(MAKE) -s js-server

	