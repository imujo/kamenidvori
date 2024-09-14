STORYBLOK_SPACE_ID=304185
STORYBLOK_FILENAME=kamenidvori

storyblok-pull-components: ## Pull components from Storyblok
	npx storyblok pull-components --space $(STORYBLOK_SPACE_ID) --path ./src/storyblok/components/ --file-name ${STORYBLOK_FILENAME}

storyblok-generate-types: ## Generate TypeScript type definitions from Storyblok components
	npx storyblok generate-typescript-typedefs --sourceFilePaths ./src/storyblok/components/components.${STORYBLOK_FILENAME}.json --destinationFilePath ./src/storyblok/types/component-types-sb.d.ts --JSONSchemaToTSOptionsPath ./src/storyblok/JSONSchemaToTSOptions.json

storyblok-types: # pull components and generate types from Storyblok
	@$(MAKE) -s storyblok-pull-components
	@$(MAKE) -s storyblok-generate-types

local-https:
	local-ssl-proxy --source 3010 --target 3001 --cert localhost.pem --key localhost-key.pem
