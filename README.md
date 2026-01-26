# Interflux France website

This repo is the code base for the website [interfluxfrance.com](https://interfluxfrance.com).

Tech stack:

* Svelte Kit ❤️
* Typescript
* SASS
* Bun
* Prettier
* ES Lint
* Debian
* Nginx
* Node
* Figma ⭐️

Contributors:

* Jan Werkhoven 岩 🏔️
* Steven Teliszewski 🇧🇪

Questions?

Ask Jan on [jw@interflux.au](mailto:jw@interflux.au)

## Development

```sh
bun install
bun run dev --open
```

## Production

Build production bundles:

```sh
bun install
bun run build
```

Run Svelte Kit in session (for testing):

```sh
bun build/index.js
```

Run Svelte Kit in background with PM2:

```sh
pm2 start pm2.config.js
```