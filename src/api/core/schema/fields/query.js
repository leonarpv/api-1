'use strict'

const { GraphQLList, GraphQLString } = require('graphql')
const GrowlerType = require('../type')
const { findAll } = require('../resolvers')

exports.findAll = {
  type: new GraphQLList(GrowlerType),
  args: {
    name: {
      type: GraphQLString,
      description: 'Búsqueda de growlers por nombre'
    },
    address: {
      type: GraphQLString,
      description: 'Búsqueda de growlers por dirección'
    }
  },
  resolve: findAll
}
