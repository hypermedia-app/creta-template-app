/* eslint-disable @typescript-eslint/no-var-requires,no-console */
const express = require('express')
const fallback = require('express-history-api-fallback')
const conditional = require('express-conditional-middleware')
const knossos = require('@hydrofoil/knossos')
{% if cookiecutter.apis|length > 1 %}
const { pathToRegexp } = require('path-to-regexp')
{% endif %}
const compression = require('compression')

const app = express()

app.enable('trust proxy')
app.use(compression())

const root = './apps/www/dist'
app.use(process.env.UI_PATH, express.static(root))
app.use(process.env.UI_PATH, conditional(
  req => req.accepts('html'),
  fallback('index.html', { root }),
))

const apis = knossos.default({
  endpointUrl: `${process.env.SPARQL_ENDPOINT}`,
  name: '{{cookiecutter.app_name}}',
  user: process.env.SPARQL_USER,
  password: process.env.SPARQL_PASSWORD,
})

{%- if cookiecutter.apis|length > 1 %}
app.use(pathToRegexp(process.env.API_ROOTS, [], { end: false }), apis)
{%- else %}
app.use('/', apis)
{%- endif %}

app.listen(parseInt(process.env.PORT, 10) || 8080)
