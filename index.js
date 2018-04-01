/* eslint-disable space-before-function-paren */

// Implementation
module.exports = flattenRoutes = (routes = [], level = 0) => {
  if (Array.isArray(routes)) {
    return routes.reduce((accumulator, { name, path, children }) => {
      accumulator.push({ name, path, level })
      if (children) {
        accumulator = accumulator.concat(flattenRoutes(children, level + 1))
      }
      return accumulator
    }, [])
  }
}
