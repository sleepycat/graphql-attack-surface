const { loadSchema } = require('@graphql-tools/load')
const { UrlLoader } = require('@graphql-tools/url-loader')
const { JsonFileLoader } = require('@graphql-tools/json-file-loader')

async function attackSurface(schemaLocation) {
  const schema = await loadSchema(schemaLocation, {
    loaders: [new UrlLoader(), new JsonFileLoader()],
  })

  const query = schema.getQueryType()
  const mutation = schema.getMutationType()
  const types = schema.getTypeMap()

  attackSurface = {}

  for (let [field, definition] of Object.entries(query.getFields())) {
    for (let { name, type } of definition.args) {
      if (String(type).match(/string/i)) {
        if (!attackSurface[field]) {
          attackSurface[field] = [{ [name]: type.toString() }]
        } else {
          debugger
          attackSurface[field].push({ [name]: type.toString() })
        }
      }
    }
  }

  for (let [field, definition] of Object.entries(mutation.getFields())) {
    for (let { name, type } of definition.args) {
      if (String(type).match(/string/i)) {
        if (!attackSurface[field]) {
          attackSurface[field] = [{ [name]: type.toString() }]
        } else {
          attackSurface[field].push({ [name]: type.toString() })
        }
      }
    }
  }
  return attackSurface
}

module.exports.attackSurface = attackSurface
