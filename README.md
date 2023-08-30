# Genshin Artifact Explorer

A quick and easy way to explore your artifacts from the popular Adventure RPG game [Genshin Impact](https://genshin.hoyoverse.com/pt/), using the [GOOD](https://frzyc.github.io/genshin-optimizer/#/doc) data format.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Contributing

Currently the project is in its earliest stages, all help is welcomed (especially with translation), pull requests will be reviewed and may not be accepted.

## Translation guide

In order to add a new translation, create a new `.ts` file in the `locale` folder, name it the same as the new locale (if the locale has a hyphen, as in en-GB or fr-CA, please omit it and make sure the letters that represent the country are uppercase, for naming consistency), add the necessary translations (you can check them in the other files) to the keys, import it in the `index.ts` file in the same folder, everything should now be working and, if an user with that language set in their browser visits the site, they should see it translated, plase make sure the lenght of the text does not break the existing UI and test if translations are working, pull reaquests with translations that are not working and/or breaking the UI will not be accepted.

This project is not affiliated or endorsed by Hoyoverse.
All images, names and elements belong to Hoyoverse.
