# Creta Project Template

A [copier](https://github.com/copier-org/copier/#readme) template to bootstrap and maintain web applications built with [creta](https://creta.hypermedia.app/)

## Prerequisites

- Firstly, install pipx on your machine if you don't have it already. _([docs for installing pipx](https://github.com/pypa/pipx#install-pipx))_
- Secondly, install Copier. The minimum required version for this template to work is `v6.0.0b0` (_reason [why](https://github.com/copier-org/copier/discussions/639)_), installed from `pipx`
   - Run `pipx install "copier==6.0.0b0"` in your terminal
- Thirdly, [install Lando](https://github.com/lando/lando/releases) to be able to run a local dockerized environment

## Usage

Use this template to initialize a new project:

- `copier -a .copier-creta.yaml gh:hypermedia-app/creta-project-template.git {{project-name}}`
   - creates a base project structure in the give directory
- `cd {{project-name}}`
- `yarn`
- `git add -A; git commit -m"init project"`

Then, start by running `lando start`

Finally, running the command `yarn bootstrap` will populate the database with the minimal resources

## What you get

Depending on the exact answers given to `copier`:

1. Monorepo with one or more APIs
2. A front end application
3. Fully functional local environment
   - express app serving the API(s)
   - a front end application
   - [AllegroGraph](https://allegrograph.com/) triplestore
   - Configured [Zazuko Graph Explorer](https://github.com/zazuko/graph-explorer)
   - Local SPARQL UI running [Zazuko trifid](https://zazuko.com/products/trifid/)

## Example

See in the ASCIIcasts below how to initialize a `Creta TODOs` project in `creta-todos` directory. 

[![asciicast](https://asciinema.org/a/RCToq4LcB6YhmKTpS2ILddvsg.svg)](https://asciinema.org/a/RCToq4LcB6YhmKTpS2ILddvsg)

This will start all the necessary services, accessible on a local domain (HTTPS included):

| Service | Local address |
| -- | -- |
| Web application | https://creta-todos.lndo.site/app |
| TODOs API | https://creta-todos.lndo.site/todos |
| Users API | https://creta-todos.lndo.site/users |
| Database | http://db.creta-todos.lndo.site/ |
| Trifid UI | http://trifid.creta-todos.lndo.site/sparql |
| Graph Explorer | http://explore.creta-todos.lndo.site/ |
