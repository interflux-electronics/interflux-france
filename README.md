# Interflux France website

This repo is the code base for the website [interfluxfrance.com](https://interfluxfrance.com).

Tech stack:

* Svelte Kit ❤️
* Typescript
* SASS
* Prettier
* ES Lint
* Debian
* Nginx
* NVM
* Node
* Figma ⭐️

Contributors:

* Jan Werkhoven 岩 🏔️
* Steven Teliszewski 🇧🇪

Questions?

Ask Jan on [jw@interflux.au](mailto:jw@interflux.au)

## Development

```sh
git checkout development

# create `.env.development` file

nvm install
npm install
npm run dev --open
```

## Production

```sh
git checkout production

# create `.env.production` file

nvm install
npm install
npm run build
node build/index.js
```
