# @hydrofoil/creta-project-template

## 3.0.1

### Patch Changes

- 515795b: build(deps-dev): bump @hydrofoil/talos from 0.4.17 to 0.6.2
- 8bd9e5a: build(deps-dev): bump @open-wc/eslint-config from 8.0.2 to 9.0.0

## 3.0.0

### Major Changes

- bc591a1: build(deps): bump @hydrofoil/knossos from 0.7.2 to 0.9.5 in /src

### Minor Changes

- 309802e: Add a question to allow skipping the web app project (fixes #54)

### Patch Changes

- 3074ef5: build(deps): bump @hydrofoil/knossos from 0.6.12 to 0.7.0 in /src
- 40911fc: Added missing eslint-plugin-n
- ad37175: build(deps-dev): bump eslint-import-resolver-typescript from 2.7.1 to 3.5.0 in /src
- b1754f5: build(deps-dev): bump dotenv-cli from 5.1.0 to 6.0.0 in /src
- 3eeb262: build(deps-dev): bump @open-wc/eslint-config from 7.0.0 to 8.0.2 in /src
- a25c206: build(deps-dev): bump dotenv-webpack from 7.1.1 to 8.0.1 in /src
- a1db5e0: build(deps-dev): bump yarn-deduplicate from 5.0.2 to 6.0.0 in /src
- 4be92b6: build(deps-dev): bump dotenv-webpack from 7.1.1 to 8.0.1 in /src/apps/www

## 2.0.1

### Patch Changes

- c5bc575: Wrong arguments generated in copier update
- 73033bd: build(deps-dev): bump yarn-deduplicate from 4.0.0 to 5.0.0
- b1c36d4: fix: API answer files would have wrong names
- fdd4f00: build(deps-dev): bump eslint-config-standard from 16.0.3 to 17.0.0
- 4e3d7c0: build(deps-dev): bump standard from 16.0.4 to 17.0.0

## 2.0.0

### Major Changes

- c1b368a: Update `webpack-loader-rdf` (changes type of exported factory)

### Minor Changes

- abeb059: Update to `@rdfjs/data-model@2`

### Patch Changes

- 5aab612: Template would fail on Windows
- d74227d: build(deps): bump @hydrofoil/roadshow from 0.3.12 to 0.4.0
- df9f71c: Skip API dirs in update command

## 1.2.2

### Patch Changes

- 2dfdff3: Remove `UI_PATH` variable and inject from template answer
- e3963ed: Less noise when running `bootstrap` script
- e54d104: Store not wired up correctly
- 5edd626: Wrong app component used in `www/index.html`

## 1.2.1

### Patch Changes

- d566c33: Run trifid container as root
- 4f840c0: Wrong env vars in case of single API package
- bb7f4e8: build(deps-dev): bump eslint-plugin-promise from 5.2.0 to 6.0.0 in /src
- 7537b06: build(deps-dev): bump dotenv-cli from 4.1.1 to 5.0.0 in /src

## 1.2.0

### Minor Changes

- d1b13d4: Update package.json from tasks

## 1.1.2

### Patch Changes

- 110fda5: Update API template URL

## 1.1.1

### Patch Changes

- c96bfa3: Update knossos
- 92ebef0: Add talos as dev dependency
- 60559a6: ENV was not passed to `bootstrap:vocabs` script

## 1.1.0

### Minor Changes

- 8241582: Add `vocabs` option and change script
- 9c81bb2: Create APIs automatically without asking questions

## 1.0.0

### Major Changes

- 9477509: First version

### Minor Changes

- 9319e61: Call copier for APIs packages from tasks
- 1d7ad8e: Add a hidden question about node port for debugging
- 69cb205: Create API update scripts from task

### Patch Changes

- 5755c23: Remove spaces from `app-name`
