# gapsters-post-list-vue

## What's inside

- [vuex](https://vuex.vuejs.org/en/) (state management)
- [tailwindcss](https://github.com/tailwindlabs/tailwindcss) (CSS framework)
- [Axios](https://github.com/mzabriskie/axios) (a library for XMLHttpRequests)

For testing:

- [Facebook/Jest](https://facebook.github.io/jest/)
- [Testing-library/Vue](https://testing-library.com/docs/vue-testing-library/intro)
- [Jest-dom](https://github.com/testing-library/jest-dom) (Custom jest matchers to test the state of the DOM)

## Getting Started

### Installation

Clone the repo:

```bash
git clone https://github.com/hashaneranda/gapsters-sortable-posts-vue
cd gapsters-sortable-posts-vue
```

Install the dependencies:

```bash
yarn install
```

### Commands

Running locally:

```bash
yarn serve
```

Building the app for production:

```bash
yarn build
```

Testing:

```bash
# run all tests
yarn test:unit



Note: this project is based on [vue-cli](https://cli.vuejs.org).
```

## Project Structure

```
src\
 |--app\            # Application main layout and functions
 |--assets\         # Assets
 |--components\     # Compoenents
 |--middlewares\    # Custom express middlewares
 |--config\         # Configrations of the app (Constants, Images links)
 |--features\       # App features (Vuex modules)
 |--services\       # Services for API calls and functions
 |--main.js         # vue app - app entry point
```
