
# Setup

1. Create a `.env.local` file
2. Run `pnpm install`
3. Run `pnpm run dev` to run the project on localhost

# Generating storyblok types

You first need to log into your storyblok account from the CLI.

`npx storyblok login`

After you have entered you username and password you will be able to pull storyblok types to your codebase using a Makefile command.

`make storyblok-types`

This will generate a `.json` and `.d.ts` files in `src/storyblok/gen` folder.
