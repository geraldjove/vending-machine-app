# vending-machine-app

Explore a sleek vending machine app crafted with Tailwind CSS and Vue.js, ensuring seamless usability across desktop and mobile platforms. This intuitive application calculates change effortlessly, making transactions smooth and efficient. Visit the live site to experience modern convenience in vending: [Vending Machine App](https://geraldjove.github.io/vending-machine-app/).

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## This project is using the latest Node v22.4.0

### installs fnm (Fast Node Manager)

```sh
winget install Schniz.fnm
```

### download and install Node.js

```sh
fnm use --install-if-missing 22
```

### verifies the right Node.js version is in the environment

```sh
node -v # should print `v22.4.0`
```

### verifies the right NPM version is in the environment

```sh
npm -v # should print `10.8.1`
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Using Tailwind CSS

This project uses Tailwind CSS for styling. Make sure to have Tailwind CSS properly configured to ensure the project runs smoothly. If you encounter styling issues or missing styles, ensure that Tailwind CSS is correctly installed and configured in your development environment.

For more information on Tailwind CSS, visit [Tailwind CSS Documentation.](https://v2.tailwindcss.com/docs/guides/vue-3-vite)

### Install Tailwind via npm

```sh
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

### Generate your tailwind.config.js and postcss.config.js files

```sh
npx tailwindcss init -p
```
