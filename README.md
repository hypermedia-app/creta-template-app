# Creta Project Template

A [copier](https://github.com/copier-org/copier/#readme) template to bootstrap and maintain web applications built with [creta](https://creta.hypermedia.app/)

## Prerequisites
In your own clean repo ...
- Firstly, install some common tools if you haven't got them already: 
   - git installed on your machine (installation instructions [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git]) )
   - Python with Pip - python's package manager ([instructions](https://realpython.com/installing-python/))

- Secondly, create a python virtualenv and install copier with it:
```
   python -m venv <your-virtualenv's-name-you-prefer>
   source <your-venv's-name>/bin/activate #for LINUX/MACOS 
   <your-venv's-name>\Scripts\activate #for WINDOWS
   pip install copier==6.0.0a9
   
```
   _NOTE: copier's docs recommend installing copier via pipx if used from command-line like here, but we use a .py script in \_tasks that happens to also run copier but from in-python context, so installing copier from pip in a virtualenv like shown in step above will make that .py script see copier properly_   

- Thirdly, [install Lando](https://github.com/lando/lando/releases) to be able to run a local dockerized environment

## Usage

Use this template to initialize a new project:

- `copier -a .copier-creta.yaml https://github.com/hypermedia-app/creta-template-app.git {{project-name}}`
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
