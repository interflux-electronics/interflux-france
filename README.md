# Interflux France website

This codebase builds the frontend of the website of the French company Interflux France.

[interfluxfrance.com](https://interfluxfrance.com).

Tech stack:

- Svelte Kit 5 ❤️
- Typescript
- SASS
- Prettier
- ES Lint
- Debian
- Nginx
- NVM
- Node
- Figma ⭐️

Contributors:

- Jan Werkhoven 岩 🇦🇺
- Daniel Laprade 🇫🇷
- Steven Teliszewski 🇧🇪

Questions?

Ask Jan on [jw@interflux.au](mailto:jw@interflux.au)

# Development

```sh
nvm install
npm install
npm run dev
```

# Production

Deploy

```sh
bin/deploy.sh
```

Deploy manually

```sh
ssh paris
cd /var/www/interfluxfrance.com
sudo -u interflux bash -lc "git pull"
sudo -u interflux bash -lc "nvm install"
sudo -u interflux bash -lc "npm install"
sudo -u interflux bash -lc "npm run build"
sudo systemctl restart interfluxfrance.com
```
